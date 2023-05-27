let num = [];
let counter = 0;
while (counter<6){
    let elements = prompt("Enter a number: ");
    counter++;
    if (elements===null){
        break;
    }
    let number = parseFloat(elements);
    num.push(number);
}
let formattedArray = '[' + num.join(', ') + ']';
console.log("The original array is: "+formattedArray);
let length = num.length;
console.log("The number of elements is "+length);
let mini = Math.min(...num);
console.log("The minimum value is "+mini);
let maxi = Math.max(...num);
console.log("The maximum value is "+maxi);
let ask = prompt("Do you want the array to be in ascending or descending order?(A/D): ").toUpperCase();
if (ask==='A'){
    num.sort((a,b)=>a-b);
    console.log("The array in ascending order is: ",JSON.stringify(num));
}
else if (ask==='D'){
    num.sort((a,b)=>b-a);
    console.log("The array in descending order is: ",JSON.stringify(num));
}
else{
    prompt("Please input the correct answer.");
}

