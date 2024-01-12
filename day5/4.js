    let a = document.getElementById("i1").value
    let b = document.getElementById("i2").value
    let c = document.getElementById("i3").value
    let d = document.getElementById("i4").value
    let e = document.getElementById("i5").value
    let f = document.getElementById("i6").value
    let g = document.getElementById("i7").value

    let Salary = +a + +b + +c - +d - +e - +f - +g

    document.getElementById("ans").innerText = 'Your in hand salary is Rs :' +Salary;