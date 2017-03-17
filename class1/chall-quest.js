// Instead of inputing a value for the Fahrenheit tempature, use Math.random() to generate a random tempature between 0 and 100
// Have to program output: "It is NN°F today. That's NN°C."

var fahrConv = {
	celsius: 100,
	fahrenheit: Math.random() * 100,
	convToFahrenheit: function() {
		return (this.celsius * 9 / 5) + 32	
	},
	convToCelsius: function() {
		return (this.fahrenheit - 32) / 9 * 5
	},
	fahrConv: function () {
		document.write('It is ' + this.fahrenheit.toFixed(1) + '\u00B0F today. That\'s ' +
			fahrConv.convToCelsius().toFixed(1) + '\u00B0C.');
	}
}

fahrConv.fahrConv();