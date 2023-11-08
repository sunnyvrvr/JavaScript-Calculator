import { GenericCalculator } from './GenericCalculator.js';
import { StandardCalculator } from './StandardCalculator.js';
import { EngineeringCalculator } from './EngineeringCalculator.js';
import { ProgrammingCalculator } from './ProgrammingCalculator.js';

import readline from 'readline'; 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("계산기 모드를 선택하세요: ");
console.log("1. Engineering Calculator");
console.log("2. Standard Calculator");
console.log("3. Programming Calculator");

rl.question("Enter the Mode(1/2/3):", (mode) => {
    let calculator = new GenericCalculator();

    switch (mode) {
        case "1": 
            calculator = new EngineeringCalculator();
            break;
        case "2":
            calculator = new StandardCalculator();
            break;
        case "3":
            calculator = new ProgrammingCalculator();
            break;
        default:
            console.log("※ 1,2,3 중에 선택하세요※");
            rl.close();
            return;
    }

    rl.question('Enter first number: ', (num1) => {
        rl.question(`Enter operator (${calculator.getOperators()}): `, (operator) => {
            rl.question('Enter second number: ', (num2) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                const result = calculator.operate(operator, num1, num2);
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
});