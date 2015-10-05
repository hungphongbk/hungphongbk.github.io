require.config({
	paths: {
		jquery: 'bower_components/jquery/dist/jquery.min.js'
	}
})
require(['dist/js/app'],function(App){
	console.log('okay');
});