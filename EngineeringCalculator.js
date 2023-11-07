import { StandardCalculator } from './StandardCalculator.js';

class EngineeringCalculator extends StandardCalculator {
    constructor(numA, numB, operator) {
        super(numA, numB, operator);
    }
    sqrt(a) {
        if ( a<0 ) {
            return '음수의 제곱근은 정의되지 않습니다'
        }
        return Math.sqrt(a);
    }
}

export { EngineeringCalculator };





