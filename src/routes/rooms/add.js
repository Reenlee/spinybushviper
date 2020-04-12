import uuid from 'uuid';
import { verifyHeader } from '../../helpers/token';
import Room from '../../models/rooms';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const data = JSON.parse(body);

    const auth = await verifyHeader(headers);

    const { name, userIds } = data;
    const room = await Room.create({
      id: uuid.v4(),
      name,
      userIds: userIds.concat(auth.userId),
    });

    return {
      statusCode: 200,
      body: JSON.stringify(room),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
