
//--------------------------------------------Button Array-------------------------------------

var cars = ["Mustang", "Focus", "Charger", "Chalenger", "Dart", "Cummins", "Jeep"];

//--------------------------------------------Displays car stuff-------------------------------

function displayCarInfo(){
var car = $(this).attr("data-name")
//console.log(car) //used for debugging
var gifUrl = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
	url: gifUrl, method: "GET"
}).done(function(report){ //report function
	console.log(gifUrl);

//------------------------------------------------for loop to display gifs-------------------------------------

for (var i = 0; i < 10 ; i++) {


var stillGif = report.data[i].images.downsized_still.url
var mobileGif = report.data[i].images.downsized.url

var gifDiv = $("<div class='automobile'>");
var rated = report.data[i].rating
var still = "still"
var mobile = "mobile"
var gif = "gif"
var gifImage = $("<img>").attr("src", stillGif).attr("data-still", stillGif).attr("data-mobile", mobileGif).attr("data-state", still).attr("class", gif);


gifDiv.text("Rating:  " + rated);
gifDiv.append("<br>")
gifDiv.append(gifImage);
$("#gifs").prepend(gifDiv);
};
$(".gif").on("click", function(){ 

	var state = $(this).attr("data-state");
		console.log(state)
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-mobile"));
        $(this).attr("data-state", "mobile");
      } 
    if (state === "mobile") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

		});
	
});
};
//--------------------------------------------Creation the Buttons-----------------------------

function makeButtons() {
$("#list").empty();

for (var i = 0; i < cars.length; i++) {
		  //this mqkes the button in the html(<button></button>)
          var a = $("<button>");
          // this adds a class to our button
          a.addClass("vehicle");
          // this adds a data-attribute
          a.attr("data-name", cars[i]);
          // here the text is put on the button
          a.text(cars[i]);
          // here the button is actually generated on  the HTML and shown on the page
          $("#list").append(a);
        }
    }

//-------------------------------------------------------Get the car----------------------------------

$("#add-car").on("click", function(event) {
        event.preventDefault();
        	//get the car
        var theCar = $("#car-input-input").val()
        	//push the car to the aray
        cars.push(theCar);
        	//make a new button for the car
        makeButtons();
      });


      $(document).on("click", ".vehicle", displayCarInfo);

      // makes the buttons the first time
      makeButtons();