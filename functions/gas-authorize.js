exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: "success",
      response: 'Hi there!',
    }),
  })
}