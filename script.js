// Obtener los elementos del DOM
var temperatureInput = document.getElementById('value');
var fromUnit = document.getElementById('from-select');
var toUnit = document.getElementById('to-select');
var convertButton = document.getElementById('convertButton');
var result = 0;
var inputSign = "";
var outputSign = "";

// Deshabilitar el botón de conversión al cargar la página
convertButton.disabled = true;

// Función de conversión de temperaturas
function calculateTemperature(temperature, fromUnitValue, toUnitValue) {
    if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Celsius') {
        inputSign = "°F";
        outputSign = "°C";
        return (temperature - 32) * 5/9;
    } else if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Kelvin') {
        inputSign = "°F";
        outputSign = "K";
        return (temperature - 32) * 5/9 + 273.15;
    } else if (fromUnitValue === 'Celsius' && toUnitValue === 'Fahrenheit') {
        inputSign = "°C";
        outputSign = "°F";
        return (temperature * 9/5) + 32;
    } else if (fromUnitValue === 'Celsius' && toUnitValue === 'Kelvin') {
        inputSign = "°C";
        outputSign = "K";
        return temperature + 273.15;
    } else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Celsius') {
        inputSign = "K";
        outputSign = "°C";
        return temperature - 273.15;
    } else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Fahrenheit') {
        inputSign = "K";
        outputSign = "°F";
        return (temperature - 273.15) * 9/5 + 32;
    } else {
        return "Invalid conversion";  // Si las unidades seleccionadas no son válidas
    }
}

function disableConvertButton() {
    if (temperatureInput.value.trim() === "" && fromUnit.value === "" && toUnit.value === "") {
        convertButton.disabled = true;
    } else {
        convertButton.disabled = false; // Habilitar el botón si hay entradas
    }
}

// Agregar eventos de entrada para verificar continuamente
temperatureInput.addEventListener('input', disableConvertButton);
fromUnit.addEventListener('input', disableConvertButton);
toUnit.addEventListener('input', disableConvertButton);

// Escuchar el evento 'submit' del formulario
document.getElementById('temperature-form').addEventListener('submit', function(event) {
    // Prevenir que el formulario recargue la página
    event.preventDefault();

    // Obtener los valores de los inputs
    var temperature = parseFloat(temperatureInput.value);
    var fromUnitValue = fromUnit.value;
    var toUnitValue = toUnit.value;

    // Verificar si el valor de temperatura es un número válido
    if (isNaN(temperature)) {
        document.getElementById('result').textContent = "Por favor, introduce un número válido para la temperatura.";
        return;
    }

    // Verificar si se seleccionaron unidades de conversión
    if (!fromUnitValue || !toUnitValue) {
        document.getElementById('result').textContent = "Por favor, selecciona las unidades de conversión.";
        this.disableConvertButton();
        return;
    }

    // Calcular la conversión
    result = calculateTemperature(temperature, fromUnitValue, toUnitValue);

    // Mostrar el resultado en la página
    document.getElementById('result').textContent = `${temperature}${inputSign} es igual a ${result.toFixed(2)}${outputSign}`;
});