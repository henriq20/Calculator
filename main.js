import Calculator from "./calculator.js";

const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const numbers = document.querySelectorAll('.number');
const plusMinus = document.querySelector('.plus-minus');
const operators = document.querySelectorAll('.operator');
const clearEntry = document.querySelector('.clear-entry');
const currentOutput = document.querySelector('.current-output');
const previousOutput = document.querySelector('.previous-output');

const calculator = new Calculator();

plusMinus.addEventListener('click', () => {
    calculator.switchSign();
    updateOutput();
});

equals.addEventListener('click', () => {
    calculator.calculate();
    updateOutput();
});

clear.addEventListener('click', () => {
    calculator.clear();
    updateOutput();
});

clearEntry.addEventListener('click', () => {
    calculator.clearEntry();
    updateOutput();
});

numbers.forEach(number => number.addEventListener('click', () => {
    calculator.appendNumber(number.innerHTML);
    updateOutput();
}));

operators.forEach(operator => operator.addEventListener('click', () => {
    calculator.chooseOperator(operator.innerHTML);
    updateOutput();
}));

function updateOutput() {
    previousOutput.innerHTML = calculator.previousOutput;
    
    if (calculator.hasPoint(calculator.currentOutput)) {
        let numbers = calculator.currentOutput.toString().split('.');

        currentOutput.innerHTML = Number(numbers[0]).toLocaleString('en-US');
        currentOutput.innerHTML += '.' + numbers[1];
        
        return;
    }

    currentOutput.innerHTML = Number(calculator.currentOutput).toLocaleString('en-US');
}
