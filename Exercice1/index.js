export default function pairNumbers(firstNumber, lastNumber) {
    const result = [];
    firstNumber = Number(firstNumber)
    lastNumber = Number(lastNumber)
    for (let i = firstNumber; i < lastNumber + 1; i++) {
        if (i % 2 === 0) { result.push(i)}
    };
    return result.join(",")
};
