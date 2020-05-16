import { verifyHeader } from '../../helpers/token';
import User from '../../models/users';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const { username } = JSON.parse(body);

    await verifyHeader(headers);
    const found = await User.find({ username });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(found),
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
