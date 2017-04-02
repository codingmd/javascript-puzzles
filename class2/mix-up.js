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
	document.write('(' + str1 + ', ' + str2 +'):<br>' + mixup + ' \"answer using slice & substring methods\"<br>');

}

function sliced (str1, str2) {
	document.write(str2.slice(0,2) + str1.slice(2) + " " +
	str1.slice(0,2) + str2.slice(2) +" \"answer using only slice method\"<br>");
}

mixUp('mix', 'pod');
sliced('mix', 'pod');
mixUp('dog', 'dinner');
sliced('dog', 'dinner');
mixUp('assume', 'asign');
sliced('assume', 'asign');
mixUp('dig', 'donner');
sliced('dig', 'donner');