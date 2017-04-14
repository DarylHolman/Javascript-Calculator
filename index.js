// function subtract(){
// 	console.log("Let's subtract");
// 	console.log(9 - 9)
// }
// function Multiply(){
// 	console.log("Let's multiply");
// 	console.log(9 * 9)
// }
// function Divide(){
// 	console.log("Issa divide");
// 	console.log(9 / 9)
// }
var num1;
var num2;
var res;
var results;

document.addEventListener("DOMContentLoaded", function(){
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("results");
});
function add(){
	results= +num1.value + +num2.value;
	res.value = results;
}
function subtract(){
	results= +num1.value - +num2.value;
	res.value = results;
}
function multiply(){
	results= +num1.value * +num2.value;
	res.value = results;
}
function divide(){
	results= +num1.value / +num2.value;
	res.value = results;
}