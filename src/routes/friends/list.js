import { verifyHeader } from '../../helpers/token';
import User from '../../models/users';

export const handler = async evt => {
  try {
    const { headers } = evt;

    const auth = await verifyHeader(headers);
    const user = await User.find({ id: auth.userId });

    const { friends: userIds } = user;
    const friends = await User.listIn('id', userIds);

    return {
      statusCode: 200,
      body: JSON.stringify({
        friends,
      }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
