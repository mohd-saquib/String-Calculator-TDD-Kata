"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringCalculator_1 = require("./StringCalculator");
const calculator = new StringCalculator_1.StringCalculator();
// Log initial count
console.log("Initial Count =>", calculator.getCalledCount()); // Output: Initial Count => 0
// Test cases
console.log(calculator.add("2,1001")); // Output: 2 (1001 is ignored)
console.log("Count after add() =>", calculator.getCalledCount()); // Output: Count after add() => 1
console.log(calculator.add("1000,2000")); // Output: 1000 (2000 is ignored)
console.log("Count after add() =>", calculator.getCalledCount()); // Output: Count after add() => 2
console.log(calculator.add("1\n2,1000")); // Output: 1003 (1000 is not ignored)
console.log("Count after add() =>", calculator.getCalledCount()); // Output: Count after add() => 3
console.log(calculator.add("//;\n1;2;1001")); // Output: 3 (1001 is ignored)
console.log("Count after add() =>", calculator.getCalledCount()); // Output: Count after add() => 4
// Count should now be 4
console.log("Count => ", calculator.getCalledCount()); // Output: 4
// Test custom delimiters of various lengths
console.log("custom delimiters => ", calculator.add("//***\n1***2***3")); // Output: 6 (delimiter is ***)
console.log(calculator.add("//;;;\n1;;;2;;;3")); // Output: 6 (delimiter is ;;;)
console.log(calculator.add("//---\n1---2---3")); // Output: 6 (delimiter is ---)
console.log(calculator.add("//***\n1***2***3***1001")); // Output: 6 (1001 is ignored)
console.log(calculator.add("//||\n1||2||3")); // Output: 6 (delimiter is ||)
// Test cases with multiple delimiters
console.log("Result for '//[*][%]\\n1*2%3':", calculator.add("//[*][%]\n1*2%3")); // Output: 6
console.log("Result for '//[***][%%%]\\n1***2%%%3':", calculator.add("//[***][%%%]\n1***2%%%3")); // Output: 6
console.log("Result for '//[;][&]\\n1;2&3':", calculator.add("//[;][&]\n1;2&3")); // Output: 6
console.log("Result for '//[***][%%%]\\n1***2%%%3***1001%%%4':", calculator.add("//[***][%%%]\n1***2%%%3***1001%%%4")); // Output: 10 (1001 is ignored)
try {
    console.log(calculator.add("1,-2,3")); // Should raise an exception
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message); // Output: "Negative numbers not allowed: -2"
    }
    else {
        console.error("An unknown error occurred");
    }
}
try {
    console.log(calculator.add("//;\n1;-2;3;-4")); // Should raise an exception
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message); // Output: "Negative numbers not allowed: -2"
    }
    else {
        console.error("An unknown error occurred");
    }
}
