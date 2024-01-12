let a = document.getElementById("i1").value
let b = document.getElementById("i2").value
let c = document.getElementById("i3").value

let SimpleInterest = +a * +b * +c / 100

document.getElementById("ans").innerText = 'Simple Interest is :' +SimpleInterest