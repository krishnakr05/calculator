let num1, num2, operator
let result;
let firstnum=''
let secondnum=''
let currentOp=null;
let shouldResetDisplay= false

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
            result=divide(n1, n2);
            return result;
    }
}

operate(5, 3, '*')

function appendNumber(n){
    if(display.textContent==='0'|| shouldResetDisplay){
        display.textContent=''
        shouldResetDisplay=false
    }
    display.textContent+=n
}

function setOperator(op){
    if(currentOp!== null) evaluate();
    firstnum=display.textContent
    currentOp=op
    shouldResetDisplay= true
}

function evaluate(){
    if (currentOp===null) return;
    secondnum= display.textContent;
    let result= operate(parseFloat(firstnum), parseFloat(secondnum), currentOp);
    display.textContent=result;
    currentOp= null;
}



const display= document.querySelector('.display')

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

const clrButton= document.querySelectorAll('.clear');
clrButton.forEach(button=>{
    button.addEventListener('click', ()=>{
        console.log('clr clicked')
    })
})

