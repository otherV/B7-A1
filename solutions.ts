function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}

function reverseString(str: string): string {
    return [...str].reverse().join("");
}



type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


console.log(
    "test prob 1: [1, 2, 3, 4, 5, 6]\n",
    filterEvenNumbers([1, 2, 3, 4, 5, 6]),
    "\n"
);

console.log(
    "test prob 2: typescript\n",
    reverseString("typescript"),
    "\n"
);

console.log(
    "test prob 3-String: Hello\n",
    checkType("Hello"),
    "\n"
);

console.log(
    "test prob 3-Number: 42\n",
    checkType(42),
    "\n"
);

console.log(
    `test prob 4: { id: 1, name: "John Doe", age: 21 }\n`,
    getProperty(
        { id: 1, name: "John Doe", age: 21 },
        "name"
    ),
    "\n"
);

