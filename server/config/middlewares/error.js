const errorMiddleware = (err, req, res) => {
  console.log(err);
  res.send(500, 'An error has occurred');
};

module.exports = errorMiddleware;
