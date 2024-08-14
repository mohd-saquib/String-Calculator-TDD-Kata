"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCalculator = void 0;
class StringCalculator {
    constructor() {
        this.callCount = 0;
    }
    add(numbers) {
        this.callCount++; // Increment the count each time add() is called
        if (numbers === "") {
            return 0;
        }
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.slice(2, delimiterEndIndex));
            numbers = numbers.slice(delimiterEndIndex + 1);
        }
        const numberList = numbers.split(delimiter);
        let sum = 0;
        const negatives = [];
        for (const num of numberList) {
            if (num) {
                const n = parseInt(num, 10);
                if (n < 0) {
                    negatives.push(n);
                }
                else if (n <= 1000) {
                    // Ignore numbers greater than 1000
                    sum += n;
                }
            }
        }
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }
        return sum;
    }
    getCalledCount() {
        return this.callCount;
    }
}
exports.StringCalculator = StringCalculator;
