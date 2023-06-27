// 7 functions
//1
const errorMessage = (name: number): string => {
  console.error(`Error in row ${name}!!`);
  return "Error occurred";
};

errorMessage(14);

//2
const greetMessage = (name: string = "Nemo", sex: string = "unselected"): string => {
  switch (sex) {
    case "man":
      return `Hello ${name}-man`;
    case "woman":
      return `Hello ${name}-girl`;
    default:
      return `Hello ${name}`;
  }
}

console.log(greetMessage());
console.log(greetMessage('Spider', 'man'));

//3
const getSum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(getSum(50,120));

//4
const sumAll = (arr: number[]): number => {
  return arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

console.log(sumAll([5,8,10]));

//5
const employeeInfo = (
  name: string, 
  salary: number | null = null, 
  ...skills: string[]
): string => {
  const getSkills = skills.join(',');
  return `Candidate ${name}, wants: ${salary}, knowledge: ${getSkills}`;
};

const skillsList: string[] = ['js', 'html', 'css'];

console.log(employeeInfo('Alex', 3000, ...skillsList));

//6
const process = (value: number, callback: (value: number) => void) : void => {
  callback(value * 2);
}

const postToConsole = (value: number) : void => console.log(value);

process(15, postToConsole)

//7
function makeMultiplier(factor: number): (value: number) => number {
  return (value) => value - factor;
}
  
const doubler = makeMultiplier(2);

console.log(doubler(5));

//examples 3-type 5-interface
//1
type AnyType = string | number | boolean;
let input: AnyType = true;
console.log(input);
input = 54445
console.log(input);
input = input + '55'
console.log(input);

//2 
type Vacation = {
  anought: false,
  period: number,
  whoWas: string,
}

const worker: Vacation = {
  anought: false,
  period: 10,
  whoWas: 'Me'
}

console.log(worker);

//3 
type Numbers = {
  a: number,
  b: number
}

const nums: Numbers = {
  a: 5,
  b: 10
}

const makeSum = (obj: Numbers): number => {
  return obj.a + obj.b;
}

console.log(makeSum(nums));
//-----------//
//1

interface User {
  name: string | number,
  position?: string,
  age: number,
  merrage: boolean
}

const user: User = {
  name: 1,
  age: 20,
  merrage: true
}

console.log(user);

//2
interface ErrorName {
  errorName: (name: string) => string;
}

const logError: ErrorName = {
  errorName(name) {
    return `Wow this is ${name}`;
  }
};

console.log(logError.errorName('supererror'));

//3
interface Car {
  name: string;
}

interface Speed {
  speed: number;
}

interface Color {
  color: string;
}

interface CarDetails extends Car, Speed, Color {}

const car1: CarDetails = {
  name: 'Toyota',
  speed: 100,
  color: 'red'
};

console.log(car1);

//4
interface Gender {
  gender: 'mail' | 'femail' | 'transgender';
  iq: number;
}

const buratino: Gender = {
  gender: 'mail',
  iq: 10
};

const rusnya: Gender = {
  gender: 'transgender',
  iq: -5010
};

console.log(buratino);
console.log(rusnya);

//5
interface Blog {
  title: string;
}

interface Blog {
  date: Date;
}

const blogPost: Blog = {
  title: 'How to learn TS',
  date: new Date()
};

console.log(blogPost);


// Generics
//1 
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

const reversedNumbers = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedNumbers);

//2
const setPublicationViews = <T, U>(title: T, views: U): [T, U] => {
  return [title, views];
}

console.log(setPublicationViews('lorem', 10));
console.log(setPublicationViews('Ipsum', 5));

//3
function identityType<T>(value: T): T {
  return value;
}

const number = identityType(5);
const text = identityType('Hello');
console.log(number, text);

//4
function calc<T extends number, U extends string>(num1: T, num2: T, operator: U): T {
  switch (operator) {
    case '+':
      return num1 + num2 as T;
    case '-':
      return num1 - num2 as T;
    case '*':
      return num1 * num2 as T;
    case '/':
      return num1 / num2 as T;
    default:
      throw new Error('Invalid operator');
  }
}

console.log(calc(5, 10, '/'));

//5
function loggingIdentity<T>(array: T[]): T[] {
  console.log(array.length);
  return array;
}

loggingIdentity([1,2,3,4])



// // prev lesson number 4
// const isDone:boolean = false;
// const decimal: number = 6;
// const color: string = 'blue';
// const list: number[] = [1,2,3];
// const books: object[] = [
//   {title: 'book 1', author: 'Ja'},
//   {title: 'book 2', author: 'Ban'},
//   {title: 'book 3', author: 'Yao'},
// ];

// const greet = (name: string): void => {
//   console.log(`Hello, ${name.toUpperCase()}!!`);
// }; 

// function getAge(): number {
//   return 26;
// }

// interface Coordinate {
//   x: number;
//   y: number;
// }
 
// function printCoord(pt: Coordinate): void {
//   console.log(`The coordinate's x value is ${pt.x}`);
//   console.log(`The coordinate's y value is ${pt.y}`);
// }
 
// const coordinate: Coordinate = { x: 3, y: 7 };
// printCoord(coordinate);

// interface Name {
//   first: string;
//   last?: string;
// }
 
// function printName(obj: Name): void {
//   if (!obj.last) {
//     console.log(obj.first);
//   } else {
//     console.log(`${obj.first} ${obj.last}`);
//   }
// }
 
// const person1: Name = { first: "Bob" };
// const person2: Name = { first: "Alice", last: "Alisson" };

// printName(person1);
// printName(person2);


// function printId(id: number | string | boolean): void {
//   console.log(`Your ID is: ${id}`);
// }

// const id1: number = 101;
// const id2: string = "202";
// const id3: boolean = true;

// printId(id1);
// printId(id2);
// printId(id3);

// function getFirstThree(x: number[] | string[]): (number | string)[] {
//   return x.slice(0, 3);
// }

// const numbers: number[] = [0, 2, 6, 8, 15];
// const strings: string[] = ["hi", "by", "why", "oh"];

// console.log(getFirstThree(numbers));
// console.log(getFirstThree(strings));

// type Point = {
//   x: number;
//   y: number;
// };


// function printCoord3(pt: Point): void {
// console.log(`The coordinate's x value is ${pt.x}`);
// console.log(`The coordinate's y value is ${pt.y}`);
// }


// const newCoordinate: Point = { x: 100, y: 100 };
// printCoord3(newCoordinate);
 
 
// interface PointInt {
//   x: number;
//   y: number;
// }
 
// function printCoordInt(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
 
// printCoordInt({ x: 100, y: 100 });

// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

// const x = 5 as number;
// const y: number = 5;


// let changingString = "Hello World";
// changingString = "Olá Mundo";

// let req = { url: "https://example.com", method: "GET" } as const;


// enum Bag {
//   dragonfly= 1,
//   fly = 2,
//   worm = 3,
// }


// let c: Bag = Bag.fly;
// console.log(Bag);

