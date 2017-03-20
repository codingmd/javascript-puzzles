// Write a function pluralize that takes in two arguments, 
// a number and a word, and returns the plural. For example:
// pluralize(5, 'cat'): '5 cats'
// pluralize(7, 'turtle'): '7 turtles'
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize (num, word) {
	if (num > 1 || num == 0) {
		if (word.charAt(word.length-1) == 's' || word == 'sheep' || word == 'fish' || 
			word == 'bison' || word == 'deer') {
			var plural = word;
		}
		else if (word == 'goose') {
			var plural = 'geese';
		}
		else {
			var plural = word + 's';
		}
		while (num >= 0) {
			if (num > 1) {
				document.write(num + ' ' + plural);
			}
			else {
				document.write('No ' + plural);

			}
			var num = -1;
		}

	}
	else if (num == 1) {
		if (word.charAt(word.length-1) == 's') {
			var singular = word.slice(0,(word.length-1));
		}
		else if (word == 'sheep' || word == 'fish' || word == 'bison' || word == 'deer') {
			var singular = word;
		}
		else if (word == 'geese') {
			var singular = 'goose';
		}
		else {
			var singular = word;
		}
		document.write(num + ' ' + singular);
	}
	else {
		if (word.charAt(word.length-1) == 's') {
			document.write(num + ' ' + word + ' can\'t happen!');
		}
		else {
			document.write(num + ' ' + word + 's can\'t happen!');
		}
	}
	document.write('<br>');	
}

pluralize(3,'frog');
pluralize(5,'cats');
pluralize(1,'bees');
pluralize(1,'bee');
pluralize(-10,'suns');
pluralize(-10,'sun');
