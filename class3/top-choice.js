// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", 
// picking the right suffix for the number based on what it is.

var topChoice = {
	favoriteColors: ['blue', 'pink', 'yellow'],
	favoriteTvGenres: ['sci fi', 'drama', 'comedy','fantasy'],
	favoriteDecades: [80, 90]
}

for (var i in topChoice) {
	if (topChoice.hasOwnProperty(i)) {
		var element = 0;
		// document.write(Object.keys(topChoice)[element] + '<br>');
		while (topChoice[i].length > 0 && element < 3) {
			if (element == 0) {
				document.write('My 1st choice: ' + topChoice[i].shift() + '<br>');
				element++;
			}
			else if (element == 1) {
				document.write('My 2nd choice: ' + topChoice[i].shift() + '<br>');
				element++;
			}
			else if (element == 2) {
				document.write('My 3rd choice: ' + topChoice[i].shift() + '<br>');
				element++;
			}	
		}
	}
}

