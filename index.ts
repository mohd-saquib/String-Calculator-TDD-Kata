import { StringCalculator } from "./StringCalculator";

const calculator = new StringCalculator();

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
