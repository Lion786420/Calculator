const add=(firstNumber,secondNumber)=>{
    return firstNumber+secondNumber;
}
const substract=(firstNumber,secondNumber)=>{
    return firstNumber-secondNumber;
}
const multiply=(firstNumber,secondNumber)=>{
    return firstNumber*secondNumber;
}
const divide=(firstNumber,secondNumber)=>{
    return firstNumber/secondNumber;
}
const operate=(firstNumber,secondNumber,operator)=>{
    if(operator=='+'){
        return add(firstNumber,secondNumber);
    }else if(operator=='-'){
        return substract(firstNumber,secondNumber);
    }else if(operator=='*'){
        return multiply(firstNumber,secondNumber);
    }else{
        return divide(firstNumber,secondNumber);
    }
}
let firstNumber=0,secondNumber=0,operator='';
const number=document.querySelectorAll('.number');
const display=document.querySelector('.display');
display.textContent='';
const operators=document.querySelectorAll('.operator');
const hover=document.querySelectorAll(".pad>div");
const clear=document.querySelector(".clear");
const deleteItem=document.querySelector('.delete');
const equal=document.querySelector('.equal');
hover.forEach((hov)=>hov.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor='gray';
}));
hover.forEach((hov)=>hov.addEventListener('mouseout',(e)=>{
    e.target.style.backgroundColor='white';
}));
number.forEach((num)=>num.addEventListener('click',(e)=>{
    display.textContent+=e.target.textContent;
}));
operators.forEach((operator)=>operator.addEventListener('click',(e)=>{
    let displayLength=display.textContent.length;
    let lastLetter=display.textContent.charAt(displayLength-1);
    if(display.textContent==''){
        display.textContent=`0${e.target.textContent}`;
    }else if(lastLetter=='+'||lastLetter=='-'||lastLetter=='*'||lastLetter=='/'||lastLetter=='.'){
        display.textContent=display.textContent.slice(0,length-1)+e.target.textContent;
    }else{
        display.textContent+=e.target.textContent;
    }
}));
clear.addEventListener('click',(e)=>{
    display.textContent='';
});
deleteItem.addEventListener('click',(e)=>{
    display.textContent=display.textContent.slice(0,display.textContent.length-1);
});
equal.addEventListener('click',(e)=>{
    let displayLength=display.textContent.length;
    let lastLetter=display.textContent.charAt(displayLength-1);
    if(lastLetter=='+'||lastLetter=='-'||lastLetter=='*'||lastLetter=='/'||lastLetter=='.'){
        display.textContent=eval(display.textContent.slice(0,displayLength-1))+lastLetter;
    }else{
        display.textContent=eval(display.textContent);
    }
});