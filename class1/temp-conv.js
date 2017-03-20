// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var tempConv = {
	celsius: 100,
	fahrenheit: 120,
	convToFahrenheit: function() {
		return (this.celsius * 9 / 5) + 32;	
	},
	convToCelsius: function() {
		return (this.fahrenheit - 32) / 9 * 5;
	},
	tempConv: function () {
		document.write(this.celsius + '\u00B0C is ' + tempConv.convToFahrenheit().toFixed(1) + '\u00B0F<br>' +
			this.fahrenheit + '\u00B0F is ' + tempConv.convToCelsius().toFixed(1) + '\u00B0C');
	}
}
tempConv.tempConv();
