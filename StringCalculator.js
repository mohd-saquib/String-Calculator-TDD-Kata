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
        let delimiter = /,|\n/; // Default delimiters: comma and newline
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            const delimiterPart = numbers.slice(2, delimiterEndIndex);
            if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
                const delimiters = delimiterPart
                    .slice(1, -1)
                    .split("][")
                    .map((d) => this.escapeDelimiter(d));
                delimiter = new RegExp(delimiters.join("|")); // Combine multiple delimiters using OR
            }
            else {
                delimiter = new RegExp(this.escapeDelimiter(delimiterPart));
            }
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
    escapeDelimiter(delimiter) {
        // Escape special characters in the delimiter to be used in a regular expression
        return delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    getCalledCount() {
        return this.callCount;
    }
}
exports.StringCalculator = StringCalculator;
