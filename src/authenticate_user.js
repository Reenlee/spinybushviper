export const handler = async event => {
  try {
    console.log('hello world');
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'G.o.d.o',
          input: event,
        },
        null,
        2
      ),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(err),
    };
  }
};
