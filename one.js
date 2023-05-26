alert("Welcome!");
var n = prompt("Please enter your name: ");
console.log("Greetings, " + n + ".");
let x = parseFloat(prompt("Enter a number: "));
let y = parseFloat(prompt("Enter a second number: "));

function addition(x,y){
    let add = x + y;
    console.log("The addition of two numbers is "+add);
}
function subtraction(x,y){
    let sub = x-y;
    console.log("The difference between two numbers is "+sub);
}
function multiplication(x,y){
    let product = x*y;
    console.log("The product of two numbers is "+product);
}
function division(x,y){
    if (y===0){
        console.log("Error!");
    }
    else{
        let div = x/y;
        console.log("The division of two numbers is "+div.toFixed(3));
    }
}
addition(x,y)
subtraction(x,y)
multiplication(x,y)
division(x,y)