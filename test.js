var http = require('http');
var mangaherehost = "mangahere.co"
var mangaherelist = "/mangalist/"

function getKissMangaList(){
	http.get({
		host: mangaherehost,
		path: mangaherelist
	}, function(res){
		var body = '';
		res.on('data', function(data){
			body += data;
		});
		res.on('end', function(){
			// var parsed = JSON.parse(body);
			// console.log(parsed)
			console.log(body)
		});
	})
}

console.log('asdfasldf')
getKissMangaList();