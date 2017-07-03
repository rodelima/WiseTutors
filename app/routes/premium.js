module.exports = function(application){
	application.get('/premium', function(req, res){
		res.render('premium');
	});
}
