let num1, num2, operator
let result;
let firstnum=''
let secondnum=''
let currentOp=null;
let shouldResetDisplay= false
let resultDisplayed= false
let numberEntered= false;


const display= document.querySelector('.display')

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(n1, n2, operator){
    
    switch(operator){
        case '+':
            result=add(n1, n2);
            return result;
        case '-':
            result=subtract(n1, n2);
            return result;
        case '*':
            result= multiply(n1, n2);
            return result;
        case '/':
            if(n2===0) {
                alert('lol nope')
            }

            else{
                result=divide(n1, n2);
                return Math.round(result*1000)/1000;
            }
    }
}

function appendNumber(n){
    if(display.textContent==='0'|| shouldResetDisplay || resultDisplayed){
        display.textContent=''
        shouldResetDisplay=false
        resultDisplayed= false
    }
    display.textContent+=n
    numberEntered=true
}

function setOperator(op){
    if(!numberEntered){
        currentOp= op;
        return;
    }
    if(currentOp!== null ){ 
        evaluate();
    }
    
    firstnum=display.textContent
    currentOp=op
    shouldResetDisplay= true
    numberEntered=false
}

function evaluate(){
    if (currentOp===null || numberEntered) return;
    secondnum= display.textContent;
    let result= operate(parseFloat(firstnum), parseFloat(secondnum), currentOp);
    display.textContent=result;
    currentOp= null;
    resultDisplayed=true
    numberEntered= false;
}


const numberButtons= document.querySelectorAll('.number');
numberButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        appendNumber(button.textContent)
    })
})

const opButtons= document.querySelectorAll('.operator');
opButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        setOperator(button.textContent)
    })
})

const equalsButton= document.querySelectorAll('.equals');
equalsButton.forEach(button=>{
    button.addEventListener('click', ()=>{
        evaluate();
    })
})

const clrButton= document.querySelector('.clear');
clrButton.addEventListener('click', ()=>{
    display.textContent='0'
    shouldResetDisplay= true
})


const acButton= document.querySelector('.ac');
acButton.addEventListener('click', ()=>{
    firstnum=''
    secondnum=''
    currentOp=null;
    shouldResetDisplay= false
    display.textContent='0'
})


