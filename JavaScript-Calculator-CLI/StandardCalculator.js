import { GenericCalculator } from './GenericCalculator.js'

class StandardCalculator extends GenericCalculator {
    constructor(numA, numB, operator) {
        super(numA, numB, operator);
    }    
}

export { StandardCalculator };

