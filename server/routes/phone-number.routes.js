module.exports = function (router) {
  router.get('/phone-numbers', function (req, res) {
    res.json({
      message: 1,
    });
  });
};
