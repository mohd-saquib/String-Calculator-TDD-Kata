export class StringCalculator {
    private callCount: number = 0;

    public add(numbers: string): number {
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
        const negatives: number[] = [];

        for (const num of numberList) {
            if (num) {
                const n = parseInt(num, 10);
                if (n < 0) {
                    negatives.push(n);
                }
                sum += n;
            }
        }

        if (negatives.length > 0) {
            throw new Error(
                `Negative numbers not allowed: ${negatives.join(", ")}`
            );
        }

        return sum;
    }

    public getCalledCount(): number {
        return this.callCount;
    }
}
