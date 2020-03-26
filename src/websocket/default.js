import * as AWS from 'aws-sdk';
import { verifyHeader } from '../helpers/token';
import User from '../models/users';

const sendMessageToClient = (client, connectionId, payload) =>
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
    const { data } = JSON.parse(body);
    const { auth_token: token, payloadType, ...payload } = data;
    const { messageType, recipientId, channelId } = payload;

    const { userId } = await verifyHeader({ Authorization: token });

    if (payloadType === 'connect') {
      await User.push({ id: userId }, { connections: connectionId });
    }

    // if (payloadType === 'send') {
    //   const client = new AWS.ApiGatewayManagementApi({
    //     apiVersion: '2018-11-29',
    //     endpoint: `https://${domainName}/${stage}`,
    //   });

    //   let recipientIds = [];
    //   payload.senderId = userId;

    //   const chat = await Chat.create(payload);
    //   const recipients = await User.listIn('id', recipientIds);

    //   const send = []
    //     .concat(...recipients.map(r => r.connections))
    //     .filter(cId => cId !== connectionId)
    //     .map(cId => sendMessageToClient(client, cId, chat));

    //   await Promise.all(send);
    // }

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
