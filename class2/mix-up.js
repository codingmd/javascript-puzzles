// Create a function called mixUp. It should take in two strings, and return the concatenation 
//of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:

// mixUp('mix', 'pod'): 'pox mid'
// mixUp('dog', 'dinner'): 'dig donner'

function mixUp (str1, str2) {
	firstTwo = str1.slice(0,2);
	firstLast= str1.substring(2,str1.length);
	secondTwo = str2.slice(0,2);
	secondLast = str2.substring(2,str2.length);
	mixup = secondTwo.concat(firstLast, ' ', firstTwo, secondLast);
	document.write('(' + str1 + ', ' + str2 +'): ' + mixup + '<br>');

}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');
mixUp('assume', 'asign');
mixUp('dig', 'donner');