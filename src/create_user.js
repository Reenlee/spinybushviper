module.exports.handler = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'G.o.d',
      input: event,
    },
    null,
    2
  ),
});
