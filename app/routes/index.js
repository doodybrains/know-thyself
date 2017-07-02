module.exports = function(app, db) {
  app.set('view engine', 'pug');
  app.get('/', function (req, res) {
    res.render('index');
  });
}
