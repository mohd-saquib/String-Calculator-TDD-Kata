# String Calculator

This is a simple String Calculator implemented in Node.js using TypeScript. The calculator can handle basic operations such as adding numbers in a comma-separated string, supporting custom delimiters, and handling negative numbers.

## Features

-   **Basic Addition**: Add numbers in a comma-separated string.
-   **Custom Delimiters**: Support for different delimiters specified at the beginning of the string.
-   **New Line Support**: Handle new lines between numbers.
-   **Negative Number Handling**: Throws an exception when negative numbers are provided, listing all the negative numbers in the exception message.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/string-calculator.git
    cd string-calculator
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Compile TypeScript**:

    ```bash
    npx tsc
    ```

4. **Run the calculator**:

    ```bash
    node index.js
    ```

## Usage

The calculator is implemented in the `StringCalculator.ts` file. You can modify `index.ts` to test with different input strings.

### Example Usage

```typescript
import { StringCalculator } from "./StringCalculator";

const calculator = new StringCalculator();

console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1")); // Output: 1
console.log(calculator.add("1,5")); // Output: 6
console.log(calculator.add("1\n2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3

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
        console.error(e.message); // Output: "Negative numbers not allowed: -2, -4"
    } else {
        console.error("An unknown error occurred");
    }
}
```

## Running Tests

You can modify the `index.ts` file with your test cases and run it to see the output.

## Error Handling

-   If negative numbers are provided in the string, the `add` method will throw an error with a message listing all negative numbers found.
-   The `catch` block uses `e: unknown` typing to handle errors safely. It checks if the error is an instance of `Error` to access the `message` property.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
