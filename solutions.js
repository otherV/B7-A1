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
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true,
    };
}
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
function getIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter((item) => set1.has(item));
}
console.log("test prob 1: [1, 2, 3, 4, 5, 6]\n", filterEvenNumbers([1, 2, 3, 4, 5, 6]), "\n");
console.log("test prob 2: typescript\n", reverseString("typescript"), "\n");
console.log("test prob 3-String: Hello\n", checkType("Hello"), "\n");
console.log("test prob 3-Number: 42\n", checkType(42), "\n");
console.log(`test prob 4: { id: 1, name: "John Doe", age: 21 }\n`, getProperty({ id: 1, name: "John Doe", age: 21 }, "name"), "\n");
console.log(`test prob 5: { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 }\n`, toggleReadStatus({ title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 }), "\n");
console.log(`test prob 6: new Student("Alice", 20, "A")\n`, new Student("Alice", 20, "A").getDetails(), "\n");
console.log(`test prob 7: [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]\n`, getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]), "\n");
