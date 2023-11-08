import { GenericCalculator } from './GenericCalculator.js';

class ProgrammingCalculator extends GenericCalculator {
    DecimalToBinary(decimalNumber) {
        return decimalNumber.toString(2);
    }
}

export { ProgrammingCalculator };
