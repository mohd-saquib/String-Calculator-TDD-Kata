export class StringCalculator {
    public add(numbers: string): number {
        if (!numbers) return 0;

        let delimiterPattern = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            delimiterPattern = new RegExp(numbers.slice(2, delimiterEndIndex));
            numbers = numbers.slice(delimiterEndIndex + 1);
        }

        const numberList = numbers.split(delimiterPattern);
        const negatives: number[] = [];

        const sum = numberList.reduce((total, num) => {
            const n = parseInt(num, 10);
            if (isNaN(n)) return total; // Skip empty or invalid entries
            if (n < 0) negatives.push(n);
            return total + n;
        }, 0);

        if (negatives.length > 0) {
            throw new Error(
                `Negative numbers not allowed: ${negatives.join(", ")}`
            );
        }

        return sum;
    }
}
