const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
}

console.log(sayHi("test", 22, "male"));

export {};
