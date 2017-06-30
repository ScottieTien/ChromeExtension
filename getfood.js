chrome.browserAction.setBadgeText({text: "2.0"});

var getFoodResult = function getfood() {
	//static selection here. Todo: invoke other API to make it more dynamic
    var food = ["Kamehachi", "Pret", "Subway", "Downstairs"];
	
    option = Math.floor(Math.random() * food.length);
	alert(food[option]);
}

document.addEventListener('DOMContentLoaded', function() {
	var showFoodButton = document.getElementById("showFood");
	
	showFoodButton.addEventListener("click", function(){
	
		getFoodResult();
	
	}, false)
}, false);
