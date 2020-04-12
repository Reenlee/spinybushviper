import * as AWS from 'aws-sdk';
import uuid from 'uuid';

import { verifyHeader } from '../helpers/token';
import User from '../models/users';
import Chat from '../models/chats';
import Room from '../models/rooms';

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
    const { type, senderId, recipientId, roomId } = payload;
    payload.id = uuid.v4();

    if (type === 'connect') {
      await User.push({ id: senderId }, { connections: connectionId });
    }

    if (type === 'send') {
      const client = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: `https://${domainName}/${stage}`,
      });

      if (recipientId) {
        const recipient = await User.find({ id: recipientId });

        await Promise.all(
          recipient.connections.map(cId => send(client, cId, payload))
        );
      }

      if (roomId) {
        const room = await Room.find({ id: roomId });
        const { userIds = [] } = room;
        const recipients = await User.listIn('id', userIds);

        await Promise.all(
          []
            .concat(...recipients.map(r => r.connections))
            .filter(cId => cId !== connectionId)
            .map(cId => send(client, cId, payload))
        );
      }

      await Chat.create(payload);
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
