import * as AWS from 'aws-sdk';
import uuid from 'uuid';

import { verifyHeader } from '../helpers/token';
import User from '../models/users';
import Chat from '../models/chats';
import Room from '../models/rooms';
import Invite from '../models/invites';

const send = (client, connectionId, payload) =>
  new Promise((resolve, reject) => {
    client.postToConnection(
      {
        ConnectionId: connectionId,
        Data: JSON.stringify(payload),
      },
      async (err, data) => {
        if (err) {
          const user = await User.find({ connections: connectionId });
          await User.pull({ id: user.id }, { connections: connectionId });
          reject(err);
        }
        resolve(data);
      }
    );
  });

export const handler = async evt => {
  try {
    const { requestContext, body } = evt;
    const { connectionId, domainName, stage } = requestContext;
    const { data: payload } = JSON.parse(body);

    const auth = await verifyHeader({ Authorization: payload.auth_token });

    if (payload.type === 'connect') {
      await User.push({ id: auth.userId }, { connections: connectionId });
    }

    if (payload.type === 'send') {
      const client = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: `https://${domainName}/${stage}`,
      });

      const data = {
        id: uuid.v4(),
        type: payload.type,
        createdOn: new Date().getTime(),
        senderId: payload.senderId,
        recipientId: payload.recipientId,
        roomId: payload.roomId,
        message: payload.message,
        active: true,
      };

      if (payload.recipientId) {
        const recipient = await User.find({ id: payload.recipientId });

        await Promise.all(
          recipient.connections.map(cId => send(client, cId, data))
        );
      }

      if (payload.roomId) {
        const room = await Room.find({ id: payload.roomId });
        const { userIds = [] } = room;
        const recipients = await User.listIn('id', userIds);

        await Promise.all(
          []
            .concat(...recipients.map(r => r.connections || []))
            .filter(cId => cId !== connectionId)
            .map(cId => send(client, cId, data))
        );
      }

      await Chat.create(data);
    }

    if (payload.type === 'invite') {
      const client = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: `https://${domainName}/${stage}`,
      });

      const user = await User.find({ username: payload.username });
      const { connections } = user;
      const data = {
        id: uuid.v4(),
        type: payload.type,
        createdOn: new Date().getTime(),
        username: auth.username,
        senderId: auth.userId,
        recipientId: user.id,
        active: true,
      };

      await Invite.create(data);
      await Promise.all(connections.map(cId => send(client, cId, data)));
    }

    if (payload.type === 'accept') {
      const client = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: `https://${domainName}/${stage}`,
      });

      const user = await User.find({ username: auth.username });
      const friend = await User.find({ username: payload.username });
      await User.push({ id: auth.userId }, { friends: friend.id });
      await User.push({ id: friend.id }, { friends: auth.userId });
      await Invite.delete({ senderId: friend.id, recipientId: auth.userId });

      const { connections } = friend;
      const data = {
        type: payload.type,
        friends: [
          friend,
          {
            id: auth.userId,
            username: auth.username,
          },
        ],
      };

      await Promise.all(
        user.connections.concat(connections).map(cId => send(client, cId, data))
      );
    }

    if (payload.type === 'add-room') {
      const client = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: `https://${domainName}/${stage}`,
      });

      const { name, userIds } = payload;
      const room = await Room.create({
        id: uuid.v4(),
        name,
        userIds: userIds.concat(auth.userId),
      });

      const users = await User.listIn('id', userIds.concat(auth.userId));

      const data = {
        type: payload.type,
        room,
      };

      await Promise.all(
        []
          .concat(...users.map(r => r.connections || []))
          .map(cId => send(client, cId, data))
      );
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({}),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};

// const sample = {
//   invite: {
//     auth_token: `Bearer ${localStorage.getItem('token')}`,
//     sender: {
//       id: auth.userId,
//       username: auth.username,
//     },
//     type: 'invite',
//     username,
//   },
// };
