import User from '../models/users';

export const handler = async evt => {
  try {
    const {
      requestContext: { connectionId },
    } = evt;

    const user = await User.find({
      connections: connectionId,
    });

    await User.pull({ id: user.id }, { connections: connectionId });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({}),
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
