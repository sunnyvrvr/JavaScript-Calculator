class GenericCalculator{
    constructor(numA, numB, operator) {
        this.a = numA;
        this.b = numB;
        this.op = operator;
    }
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }   
    mul(a, b) {
        return a * b;
    } 
    div(a, b) {
        if(b===0){
            return '0으로 나눌 수 없습니다';    
        }
        return a / b;
    } 
    
    operate(operator, numA, numB) {
        switch(operator) {
            case '+':
                return this.add(numA, numB);
            case '-': 
                return this.sub(numA, numB);
            case '*':
                return this.mul(numA, numB);
            case '/':
                return this.div(numA, numB);
                default: 
                return "부적합한 연산자"
                }
            }

    getOperators() {
        return ['+', '-', '*', '/'];
    }
}     

export { GenericCalculator };