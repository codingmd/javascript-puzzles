// Write a function pluralize that takes in two arguments, 
// a number and a word, and returns the plural. For example:
// pluralize(5, 'cat'): '5 cats'
// pluralize(7, 'turtle'): '7 turtles'
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize (num, word) {
	if (word.charAt(word.length-1) == 's' || num <= 0 || num > 1) {
		if (word == 'sheep' || word == 'fish' || word == 'bison' || word == 'deer') {
			var plural = word;
		}
		else if (word == 'goose') {
			var plural = 'geese';
		}
		document.write(num + ' ' + plural);
	}
	else if (num =={

				var plural = word + 's';
			}
			document.write(num + ' ' + plural);
		}
		else if (num == 1) {
			if (word == 'geese') {
				var singular = 'goose';
			}
			else {
				var singular = word;
			}
			document.write("That\'s singular: " + num + ' ' + singular);
		}
		else {
			document.write(num + ' number of ' + word + 'can\'t happen!');
		}	
}

function(3,frog);
function(5,cats);
function(1,bees);
function(1,bee);
function(1,sun);