import { StringCalculator } from "./StringCalculator";

const calculator = new StringCalculator();

// Initial count should be 0
console.log("Count => ", calculator.getCalledCount()); // Output: 0

console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1")); // Output: 1

// Count should now be 2
console.log("Count => ", calculator.getCalledCount()); // Output: 2

console.log(calculator.add("1,5")); // Output: 6
console.log(calculator.add("1\n2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3

// Count should now be 5
console.log("Count => ", calculator.getCalledCount()); // Output: 5

try {
    console.log(calculator.add("1,-2,3")); // Should raise an exception
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message); // Output: "Negative numbers not allowed: -2"
    } else {
        console.error("An unknown error occurred");
    }
}

try {
    console.log(calculator.add("//;\n1;-2;3;-4")); // Should raise an exception
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message); // Output: "Negative numbers not allowed: -2"
    } else {
        console.error("An unknown error occurred");
    }
}
