let num1, num2, operator

let result;
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
            console.log(result)
            break;
        case '-':
            result=subtract(n1, n2);
            console.log(result)
            break;
        case '*':
            result= multiply(n1, n2);
            console.log(result)
            break;
        case '/':
            result=divide(n1, n2);
            console.log(result)
            break;
    }
}

operate(5, 3, '*')

