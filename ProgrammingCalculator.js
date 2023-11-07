import { StandardCalculator } from './StandardCalculator.js';

export class ProgrammingCalculator extends StandardCalculator {
    DecimalToBinary(decimalNumber) {
        return decimalNumber.toString(2);
    }
}
