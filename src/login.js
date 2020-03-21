import * as jwt from 'jsonwebtoken';

import { JWT_PASSWORD } from './contants';
import { findOneAsync } from './mongodb/query';

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

    const token = jwt.sign({ userId: user.id }, JWT_PASSWORD);

    return {
      statusCode: 200,
      body: JSON.stringify({ token, message: 'User exists!' }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
