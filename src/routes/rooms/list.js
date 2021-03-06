import { verifyHeader } from '../../helpers/token';
import Room from '../../models/rooms';

export const handler = async evt => {
  try {
    const { headers } = evt;

    const auth = await verifyHeader(headers);
    const rooms = await Room.list({ userIds: auth.userId });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(rooms),
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
