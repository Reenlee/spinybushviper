import { verifyHeader } from '../../helpers/token';
import Room from '../../models/rooms';
import User from '../../models/users';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const data = JSON.parse(body);

    await verifyHeader(headers);

    const { roomId } = data;

    console.log(roomId);
    const room = await Room.find({ id: roomId });

    const { userIds } = room;
    room.users = await User.listIn('id', userIds);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(room),
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
