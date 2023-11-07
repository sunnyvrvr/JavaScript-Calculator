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

// let calculator = new StandardCalculator();
// let sum = calculator.add(5,3, '+');
// console.log('덧셈결과:', sum);

let calculator, cal, numA, operator, numB, result;
askCalculator();

// 질문(1) : 계산기 선택
function askCalculator() {
    rl.question('Enter the Mode(1/2/3): ', (input) => {
        const num = parseInt(input); // 숫자로 파싱    
        if(isNaN(num)){
            console.log('올바른 숫자를 입력하세요')
            rl.close();
        } else {
            if(num === 1){
                console.log('1번 계산기를 선택하였습니다.')
                cal = 1; 
                calculator = new EngineeringCalculator();               
            } else if(num === 2){
                console.log('2번 계산기를 선택하였습니다.')    
                cal = 2;
                calculator = new StandardCalculator();  
            } else if(num === 3){
                console.log('3번 계산기를 선택하였습니다.')    
                cal = 3;   
                calculator = new ProgrammingCalculator();            
            } else {
                console.log('※1과 2 중에 선택하세요※')
                askCalculator();
            }
        }    
        askNumA();
    });
}

// 질문(2) : 첫번째 숫자 입력 
function askNumA() {
    rl.question('Enter first number: ', (input) => {
        const num  = parseInt(input);
        if(isNaN(num)) {
            console.log('올바른 숫자를 입력하세요');
            askNumA();
        } else {
            numA = num;
            askOperator();
        }
    });
}

// 질문(3) : 연산자 입력 
function askOperator() {
    rl.question('Enter operator (+, -, *, /): ', (input) => {
        if(input === '+'||input === '-'||input === '*'||input === '/'){
            operator = input; //operator 할당   
            askNumB();
        } else {
            console.log('올바른 연산자를 입력하세요');
            askOperator();           
        }
    });
}

// 질문(3) : 두번째 숫자 입력 
function askNumB() {
    rl.question('Enter second number: ', (input) => {
        const num  = parseInt(input);
        if(isNaN(num)) {
            console.log('올바른 숫자를 입력하세요');
            askNumB();
        } else {
            numB = num;
            resultCal();
        }
    });
}

function resultCal() {
    switch (cal) {
    case 1:
        if(operator === '+') {
            result = calculator.add(numA, numB);
        } else if (operator === '-') {
            result = calculator.sub(numA, numB);            
        } else if (operator === '*') {
            result = calculator.mul(numA, numB);            
        } else if (operator === '/') {
            result = calculator.div(numA, numB);            
        } else {
            console.log('올바른 연산자를 입력하세요');
        }
        break; 
    case 2:
        if(operator === '+') {
            result = calculator.add(numA, numB);
        } else if (operator === '-') {
            result = calculator.sub(numA, numB);            
        } else if (operator === '*') {
            result = calculator.mul(numA, numB);            
        } else if (operator === '/') {
            result = calculator.div(numA, numB);            
        } else {
            console.log('올바른 연산자를 입력하세요');
        }
        break;    
    case 3:
        if(operator === '+') {
            result = calculator.add(numA, numB);
        } else if (operator === '-') {
            result = calculator.sub(numA, numB);            
        } else if (operator === '*') {
            result = calculator.mul(numA, numB);            
        } else if (operator === '/') {
            result = calculator.div(numA, numB);            
        } else {
            console.log('올바른 연산자를 입력하세요');
        }
        break; 
    }
    console.log('Result:', result);
    rl.close();
}