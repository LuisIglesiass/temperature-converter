var temperature = document.getElementById('value');
var fromUnit = document.getElementById('fromSelect');
var toUnit = document.getElementById('toSelect');
var result = 0;
var inputSign = "";
var outputSign = "";


function calculateTemperature(temperature) {
	if(fromUnit == 'fahrenheit' && toUnit == 'celseus') {
		inputSign = "°F";
		outputSign = "°C";
		return result = (temperature - 32) * 5/9;
	} else if (fromUnit == 'fahrenheit' && toUnit == 'kelvin') {
		inputSign = "°F";
		outputSign = "K";
		return result = (temperature - 32) * 5/9 + 273.15;
	} else if (fromUnit == 'celseus' && toUnit == 'fahrenheit') {
		inputSign = "°C";
		outputSign = "°F";
		return result = (temperature * 9/5) + 32;
	} else if (fromUnit == 'celseus' && toUnit == 'kelvin') {
		inputSign = "°C";
		outputSign = "K";
		return result = temperature + 273.15;
	} else if (fromUnit == 'kelvin' && toUnit == 'celseus') {
		inputSign = "K";
		outputSign = "°C";
		return result = temperature - 273.15;
	} else if (fromUnit == 'kelvin' && toUnit == 'fahrenheit') {
		inputSign = "K";
		outputSign = "°F";
		return result = (temperature - 273.15) * 9/5 + 32;
	}
}

document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    // Prevenir que el formulario recargue la página
    event.preventDefault();

    calculateTemperature(temperature);

    // Mostrar el resultado en la página
    document.getElementById('result').textContent = `${temperature}${inputSign} es igual a ${result}${outputSign}`;
});