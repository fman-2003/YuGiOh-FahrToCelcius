function convertFahrToCelsius(a) {
    return (a - 32) * (5/9)
}

document.getElementById("temp").innerHTML = `Here is a sample conversion of 100degF to degC => ${convertFahrToCelsius(100).toFixed(4)}`
