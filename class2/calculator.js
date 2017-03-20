// Write a function called squareNumber that will take one argument (a number), 
// square that number, and return the result. It should also log a string like
// "The result of squaring the number 3 is 9."
function squareNumber (num) {
	var square = num*num;
	console.log('1) The result of squaring the number ' + num + ' is ' + square + '.');
	return square;
}
squareNumber(2);


// Write a function called halfNumber that will take one argument (a number), 
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber (num) {
	var half = num / 2;
	console.log('2) Half of ' + num + ' is ' + half.toFixed(1) + '.');
	return half;
}
halfNumber(5);


// Write a function called percentOf that will take two numbers, figure out what percent 
// first number represents of the second number, and return the result. It should also 
// log a string like "2 is 50% of 4."
function percentOf (num1, num2) {
	var percent = (num1 / num2) * 100;
	console.log('3) ' + num1 + ' is ' + percent + '% of ' + num2 + '.');
	return percent;
}
percentOf(2,4);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the 
// area based on that, and return the result. It should also log a string like "The area for a 
// circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircle (radius) {
	var area = Math.PI * radius * radius;
	console.log('4) The area for a circle with radius ' + radius + ' is ' + 
		area + ' or ' + area.toFixed(2) + ', rounded.');
	return area;
}
areaOfCircle(2);


// Write a function that will take one argument (a number) and perform the following operations, 
// using the functions you wrote earlier:
// #1 Take half of the number and store the result.
// #2 Square the result of #1 and store that result.
// #3 Calculate the area of a circle with the result of #2 as the radius.
// #4 Calculate what percentage that area is of the squared result (#3).
function compCalc (number) {
	console.log('5) below');
	var halved = halfNumber(number);
	var squared = squareNumber(halved);
	var areaCirc = areaOfCircle(squared);
	var percentage = percentOf(areaCirc, squared);
	document.write('5) The percentage the area of a circle is of the radius:' + percentage.toFixed(1) + "%");
}
compCalc(1);