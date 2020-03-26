import uuid from 'uuid';
import { insertOneAsync, listManyAsync } from '../mongodb/query';
import { encode } from '../helpers/token';

export const handler = async evt => {
  try {
    const { body } = evt;
    const data = JSON.parse(body);
    data.id = uuid.v4();
    data.friends = [];
    data.connections = [];

    const users = await listManyAsync('users');
    users.forEach(p => {
      if (p.username === data.username) {
        throw new Error('User already exists');
      }
    });

    const user = await insertOneAsync('users', data);
    const token = encode({ userId: user.id });

    return {
      statusCode: 200,
      body: JSON.stringify({
        token,
        message: 'Successfully created a new user!',
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
