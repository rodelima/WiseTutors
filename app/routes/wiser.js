module.exports = function(application){
	application.get('/wiser', function(req, res){
		res.render('wiser');
	});
}
