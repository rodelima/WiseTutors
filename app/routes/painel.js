module.exports = function(application){
	application.get('/painel', function(req, res){
		res.render('painel');
	});
}
