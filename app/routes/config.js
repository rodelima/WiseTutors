module.exports = function(application){
  application.get('/config', function(req, res){
    res.render('config');
  });
}
