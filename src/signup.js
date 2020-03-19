import { insertOneAsync, listManyAsync } from './mongodb/query';

export const handler = async evt => {
  try {
    const { body } = evt;
    const data = JSON.parse(body);

    const users = await listManyAsync('users');
    users.forEach(p => {
      if (p.username === data.username) {
        throw new Error('User already exists');
      }
    });

    await insertOneAsync('users', data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully created a new user!' }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
