export const handler = async () => {
  try {
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
