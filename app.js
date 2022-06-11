const inputCelcius = document.getElementById('inputCelcius');
const inputFahrenheit = document.getElementById('inputFahrenheit');
const inputKilometers = document.getElementById('inputKilometers');
const inputMiles = document.getElementById('inputMiles');
const inputInches = document.getElementById('inputInches');
const inputCentimeters = document.getElementById('inputCentimeters');

inputCelcius.addEventListener('input', function CelciusToFahrenheit(celcius){
    const fahrenheit = ((celcius.target.value * 1.8) + 32);
    const returner = document.getElementById('returnCelcius');
    returner.value = `${fahrenheit} °F.`;

    if (inputCelcius.value.length == 0){
        returner.value = null;
    }else{
        returner.value;
}
})

inputFahrenheit.addEventListener('input', function FahrenheitToCelcius(fahrenheit){
    const celcius = ((fahrenheit.target.value - 32) / 1.8);
    const returner = document.getElementById('returnFahrenheit');
    returner.value = `${celcius} °C.`;

    if (inputFahrenheit.value.length == 0){
        returner.value = null;
    }else{
        returner.value;
    }
})

inputKilometers.addEventListener('input', function KilometersToMiles(kilometers){
    const miles = (kilometers.target.value * 0.6214);
    const returner = document.getElementById('returnKilometers');
    returner.value = `${miles} mi.`;

    if (inputKilometers.value.length == 0){
        returner.value = null;
    }else{
        returner.value;
    }
})

inputMiles.addEventListener('input', function MilesToKilometers(millas){
    const kilometers = (millas.target.value * 1.609);
    const returner = document.getElementById('returnMiles');
    returner.value = `${kilometers} km.`;

    if (inputMiles.value.length == 0){
        returner.value = null;
    }else{
        returner.value;
    }
})

inputInches.addEventListener('input', function InchesToCentimeters(pulgadas){
    const centimeters = (pulgadas.target.value * 2.54);
    const returner = document.getElementById('returnInches');
    returner.value = `${centimeters} cm.`;

    if (inputInches.value.length == 0){
        returner.value = null;
    }else{
        returner.value;   
    }
})

inputCentimeters.addEventListener('input', function CentimetersToInches(centimetros){
    const inches = (centimetros.target.value * 0.393701);
    const returner = document.getElementById('returnCentimeters');
    returner.value = `${inches} in.`;

    if (inputCentimeters.value.length == 0){
        returner.value = null;
    }else{
        returner.value;
    }
})