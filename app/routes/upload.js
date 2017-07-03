module.exports = function(application){
	application.get('/upload', function(req, res){
		res.render('upload');
	});
}
