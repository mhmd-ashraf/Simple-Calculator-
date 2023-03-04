
function add() {
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var res = Number(num1) + Number(num2);
    document.getElementById("result").value = res;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}

function sub() {
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var res = Number(num1) - Number(num2);
    document.getElementById("result").value = res;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}


function mul() {
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var res = Number(num1) * Number(num2);
    document.getElementById("result").value = res;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}

function div() {
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var res = Number(num1) / Number(num2);
    document.getElementById("result").value = res;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}

function mod() {
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var res = Number(num1) % Number(num2);
    document.getElementById("result").value = res;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}