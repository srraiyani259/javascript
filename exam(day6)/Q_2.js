let fahrenheit = document.getElementById("i1").value

let cels = (+fahrenheit - 32) * 5/9;

document.getElementById("ans").innerText = 'Celsius is :' +cels;