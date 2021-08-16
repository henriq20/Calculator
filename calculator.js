export default class Calculator {
    constructor() {
        this.operator = '+';
        this.previousOutput = '';
        this.currentOutput = '0';
    }

    clear() {
        this.previousOutput = '';
        this.clearEntry();
    }

    clearEntry() {
        this.currentOutput = '0';
    }

    chooseOperator(operator) {
        this.operator = operator;
        this.previousOutput = `${this.currentOutput} ${this.operator}`;
        this.clearEntry();
    }

    switchSign() {
        this.currentOutput = '-' + this.currentOutput;
    }

    appendNumber(number) {
        // Does nothing if the current output already has a point
        if (number === '.' && this.hasPoint(this.currentOutput)) {
            return;
        }

        // Clears the current output if it equals 0 and number is not a point
        if (number !== '.' && this.currentOutput === '0') {
            this.currentOutput = '';
        }
        
        // Appends the number only if it is a point or a valid number
        if (number === '.' || this.isNumber(number)) {
            this.currentOutput += number;
        }
    }

    calculate() {
        let x = Number(this.previousOutput.split(' ')[0]);
        let y = Number(this.currentOutput);
        
        if (this.previousOutput.includes('=')) {
            x = Number(this.currentOutput);
            y = Number(this.previousOutput.split(' ')[2]);
        } 

        this.previousOutput = `${x} ${this.operator} ${y} =`;
        
        switch (this.operator) {
            case '+':
                this.currentOutput = x + y;
                break;
            
            case '-':
                this.currentOutput = x - y;
                break;
            
            case '*':
            case 'x':
            case '×':
            case '.':
                this.currentOutput = x * y;
                break;

            case '/':
            case '÷':
                this.currentOutput = x / y;
                break;

            case '%':
                this.currentOutput = x / 100.0 * y;
                break;
        
            default:
                throw new Error("The chosen operator is not valid.");
        }
    }

    hasPoint(number) {
        return number.toString().includes('.');
    }

    isNumber(value) {
        return /^[-]?\d+(?:[.,]\d+)?$/g.test(value);
    }
}
