import { verifyHeader } from '../../helpers/token';
import User from '../../models/users';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const data = JSON.parse(body);

    const auth = await verifyHeader(headers);

    const { username } = data;
    const user = await User.find({ username });
    const friend = await User.push({ id: auth.userId }, { friends: user.id });

    return {
      statusCode: 200,
      body: JSON.stringify(friend),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
