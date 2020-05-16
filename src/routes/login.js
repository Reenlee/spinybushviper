import { findOneAsync } from '../mongodb/query';
import { encode } from '../helpers/token';

export const handler = async evt => {
  try {
    const { body } = evt;
    const data = JSON.parse(body);

    const user = await findOneAsync('users', {
      username: data.username,
      password: data.password,
    });

    if (!user) {
      throw new Error('User does not exist');
    }

    const token = encode({ userId: user.id, username: user.username });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ token, message: 'User exists!' }),
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
