// Create a function called fixStart. It should take a single argument, a string, and 
// return a version where all occurrences of its first character have been replaced with '*', 
// except for the first character itself. You can assume that the string is at least one character long. 
// For example:

// fixStart('babble'): 'ba**le'
// fixStart('turtle'): 'tur*le'

function fixStart (str) {
	var firstLetter = str.charAt(0);
	var remainder = str.slice(1, str.length);
	var replaced = remainder.replace(RegExp(firstLetter, 'g'), '*');
	var result = firstLetter.concat(replaced);
	document.write(result + '<br>');
}

fixStart('babble');
fixStart('turtle');
fixStart('nintey nine');