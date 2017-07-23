var gifUrl = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=1";

$.ajax({
	url: gifUrl, method: "GET"
}).done(function(report){
	console.log(gifUrl);
});