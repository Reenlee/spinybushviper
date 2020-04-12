import { verifyHeader } from '../../helpers/token';
import Chat from '../../models/chats';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const { recipientId, roomId } = JSON.parse(body);

    const auth = await verifyHeader(headers);
    let chats = [];

    if (recipientId) {
      chats = await Chat.listOr([
        { senderId: recipientId, recipientId: auth.userId },
        { senderId: auth.userId, recipientId },
      ]);
    }

    if (roomId) {
      chats = await Chat.list({ roomId });
    }

    return {
      statusCode: 200,
      body: JSON.stringify(chats),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
