"use strict";
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
function reverseString(str) {
    return [...str].reverse().join("");
}
function checkType(input) {
    if (typeof input === "string") {
        return "String";
    }
    else {
        return "Number";
    }
}
function getProperty(obj, key) {
    return obj[key];
}
console.log("test prob 1: [1, 2, 3, 4, 5, 6]\n", filterEvenNumbers([1, 2, 3, 4, 5, 6]), "\n");
console.log("test prob 2: typescript\n", reverseString("typescript"), "\n");
console.log("test prob 3-String: Hello\n", checkType("Hello"), "\n");
console.log("test prob 3-Number: 42\n", checkType(42), "\n");
console.log(`test prob 4: { id: 1, name: "John Doe", age: 21 }\n`, getProperty({ id: 1, name: "John Doe", age: 21 }, "name"), "\n");
