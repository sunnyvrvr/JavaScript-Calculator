let currentValue="";
let storedValue= null; 
let resultValue = null;
let currentOperation = null;

/*버튼 클릭한 숫자 노출 함수*/
function updateScreen() {
    document.getElementById('screen').innerHTML = currentValue;
}
/*계산한 결과값 노출 함수*/
function updateResultScreen(){
    document.getElementById('screen').innerHTML = resultValue;
}

/*숫자 입력*/
function handleNumber(number){
    console.log("number button click");    
    console.log("number:", number);

    currentValue += number;
    updateScreen();
}
function func_clearScreen(){
    console.log("c button click");
    currentValue="";
    updateScreen();
}

/*사칙연산*/
function handleEqual(){
    console.log("계산이전 currentValue", currentValue);
    if(isNaN(storedValue)){ //연산기호를 2회이상 입력할 경우 처리 
        storedValue = resultValue;               
    }
    console.log("계산이전 storedValue", storedValue);
    if(currentOperation&& storedValue!==null&& currentValue!== ""){
    switch (currentOperation) {
        case 'add':
            console.log("currentValue;", currentValue);
            resultValue = storedValue + parseInt(currentValue);
            console.log("resultValue:", resultValue);
            updateResultScreen();
            currentValue = resultValue; 
            break;
        case 'subtract':
            console.log("currentValue;", currentValue);
            resultValue = storedValue - parseInt(currentValue);
            console.log("resultValue:", resultValue);
            updateResultScreen();
            currentValue = resultValue; 
            break;
        case 'multiply':
            console.log("currentValue;", currentValue);
            resultValue = storedValue *(parseInt(currentValue));
            console.log("resultValue:", resultValue);
            updateResultScreen();
            currentValue = resultValue; 
            break;
        case 'divide':
            if(parseInt(currentValue) === 0){
                document.getElementById('screen').innerHTML = "Cannot divide by zero";
                return;
            }
            console.log("currentValue;", currentValue);
            resultValue = storedValue /(parseInt(currentValue));
            console.log("resultValue:", resultValue);
            updateResultScreen();
            currentValue = resultValue; 
            break;
    }
    }
}

function add(){
  //스크린의 값을 숫자로 변환해서 storedValue에 할당
  storedValue = parseInt(currentValue); 
  console.log("storedValue:", storedValue); //storedValue확인
  currentOperation = 'add';
  currentValue="";
}

function handleAddition(){
    console.log("addtion button click");
    add();
}

function subtract(){
    storedValue = parseInt(currentValue); 
    console.log("storedValue:", storedValue);
    currentOperation = 'subtract';
    currentValue="";
  }
  
function handleSubtraction(){
    console.log("subtraction button click");
    subtract();
}

function multiply(){
    storedValue = parseInt(currentValue); 
    console.log("storedValue:", storedValue);
    currentOperation = 'multiply';
    currentValue="";
  }
  
function handleMultiplication(){
    console.log("multiply button click");
    multiply();
}
function divide(){
    storedValue = parseInt(currentValue); 
    console.log("storedValue:", storedValue);
    currentOperation = 'divide';
    currentValue="";
  }
  
function handleDivision(){
    console.log("division button click");
    divide();
}