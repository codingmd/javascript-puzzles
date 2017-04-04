// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", 
// picking the right suffix for the number based on what it is.

topChoice = {
	favoriteColors: ['blue', 'pink', 'yellow'],
	favoriteTvGenres: ['sci fi', 'drama', 'comedy','fantasy'],
	favoriteDecades: [80, 90]
}

document.write(("Choice with #number identifier<br>").toUpperCase() + '<br>');
index = 0;
for (var i in topChoice) {
	element = 0;
	document.write(Object.keys(topChoice)[index] + '<br>');
	if (topChoice.hasOwnProperty(i)) {
		// document.write(Object.keys(topChoice)[element] + '<br>');
		while (topChoice[i].length) {
			if (element == 0) {
				document.write('My #' + (element + 1) + ' choice: ' + topChoice[i].shift() + '<br>');
				element++;
			}
			else if (element == 1) {
				document.write('My #' + (element + 1) + ' choice: ' + topChoice[i].shift() + '<br>');
				element++;
			}
			else if (element == 2) {
				document.write('My #' + (element + 1) + ' choice: ' + topChoice[i].shift() + '<br>');
				element++;
			}
			else {
				document.write('My #' + (element + 1) + ' choice: ' + topChoice[i].shift() + '<br>');
				element++;
			}	
		}
	}
	document.write('<br>');
	index++;
}

document.write(('Bonus: Choice with suffix identifier<br>').toUpperCase() + '<br>');
//using element check to determine correct # suffix for statement
topChoice = {
	favoriteColors: ['blue', 'pink', 'yellow'],
	favoriteTvGenres: ['sci fi', 'drama', 'comedy','fantasy'],
	favoriteDecades: [80, 90]
}

suffix = ['st', 'nd', 'rd', 'th'];
index = 0;
for (var j in topChoice) {
	element = 0;
	document.write(Object.keys(topChoice)[index] + '<br>');
	if (topChoice.hasOwnProperty(j)) {
		while (topChoice[j].length > 0) {
			if (element == 0) {
				document.write('My ' + (element + 1)+ suffix[element] + ' choice: ' + 
					topChoice[j].shift() + '<br>');
				element++;
			}
			else if (element == 1) {
				document.write('My ' + (element + 1) + suffix[element] + ' choice: ' + 
					topChoice[j].shift() + '<br>');
				element++;
			}
			else if (element == 2) {
				document.write('My ' + (element + 1) + suffix[element] + ' choice: ' + 
					topChoice[j].shift() + '<br>');
				element++;
			}
			else {
				document.write('My ' + (element + 1) + suffix[3] + ' choice: ' + 
					topChoice[j].shift() + '<br>');
				element++;
			}
		}
	}
	document.write('<br>');
	index++;
}

