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


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface IReadWrapper extends Book {
    isRead: boolean;
}

function toggleReadStatus(book: Book): IReadWrapper {
    return {
        ...book,
        isRead: true,
    };
}


class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    public grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


function getIntersection(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    return arr2.filter((item) => set1.has(item));
}


