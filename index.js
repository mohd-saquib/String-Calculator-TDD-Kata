"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringCalculator_1 = require("./StringCalculator");
const calculator = new StringCalculator_1.StringCalculator();
console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1")); // Output: 1
console.log(calculator.add("1,5")); // Output: 6
console.log(calculator.add("1\n2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3
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
