
// window.onload = function(){
//             var name = "Cubacub Ampaguey";
//             alert("NAME: " + name);
//         }
function Sum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById("Result").textContent = sum;
}
function Difference() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var subtract = num1 - num2;
    document.getElementById("Result").textContent = subtract;
}
function Multiplication() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var multiply = num1 * num2;
    document.getElementById("Result").textContent = multiply;
}
function Division() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var divide = num1 / num2;
    document.getElementById("Result").textContent = divide;    
}
