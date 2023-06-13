var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 7 functions
//1
var errorMessage = function (name) {
    console.error("Error in row ".concat(name, "!!"));
    return "Error occurred";
};
errorMessage(14);
//2
var greetMessage = function (name, sex) {
    if (name === void 0) { name = "Nemo"; }
    if (sex === void 0) { sex = "unselected"; }
    switch (sex) {
        case "man":
            return "Hello ".concat(name, "-man");
        case "woman":
            return "Hello ".concat(name, "-girl");
        default:
            return "Hello ".concat(name);
    }
};
console.log(greetMessage());
console.log(greetMessage('Spider', 'man'));
//3
var getSum = function (num1, num2) {
    return num1 + num2;
};
console.log(getSum(50, 120));
//4
var sumAll = function (arr) {
    return arr.reduce(function (sum, num) {
        return sum + num;
    }, 0);
};
console.log(sumAll([5, 8, 10]));
//5
var employeeInfo = function (name, salary) {
    if (salary === void 0) { salary = null; }
    var skills = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        skills[_i - 2] = arguments[_i];
    }
    var getSkills = skills.join(',');
    return "Candidate ".concat(name, ", wants: ").concat(salary, ", knowledge: ").concat(getSkills);
};
var skillsList = ['js', 'html', 'css'];
console.log(employeeInfo.apply(void 0, __spreadArray(['Alex', 3000], skillsList, false)));
//6
var process = function (value, callback) {
    callback(value * 2);
};
var postToConsole = function (value) { return console.log(value); };
process(15, postToConsole);
//7
function makeMultiplier(factor) {
    return function (value) { return value - factor; };
}
var doubler = makeMultiplier(2);
console.log(doubler(5));
var input = true;
console.log(input);
input = 54445;
console.log(input);
input = input + '55';
console.log(input);
var worker = {
    anought: false,
    period: 10,
    whoWas: 'Me'
};
console.log(worker);
var nums = {
    a: 5,
    b: 10
};
var makeSum = function (obj) {
    return obj.a + obj.b;
};
console.log(makeSum(nums));
var user = {
    name: 1,
    age: 20,
    merrage: true
};
console.log(user);
var logError = {
    errorName: function (name) {
        return "Wow this is ".concat(name);
    }
};
console.log(logError.errorName('supererror'));
var car1 = {
    name: 'Toyota',
    speed: 100,
    color: 'red'
};
console.log(car1);
var buratino = {
    gender: 'mail',
    iq: 10
};
var rusnya = {
    gender: 'transgender',
    iq: -5010
};
console.log(buratino);
console.log(rusnya);
var blogPost = {
    title: 'How to learn TS',
    date: new Date()
};
console.log(blogPost);
// Generics
//1 
function reverseArray(array) {
    return array.reverse();
}
var reversedNumbers = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedNumbers);
//2
var setPublicationViews = function (title, views) {
    return [title, views];
};
console.log(setPublicationViews('lorem', 10));
console.log(setPublicationViews('Ipsum', 5));
//3
function identityType(value) {
    return value;
}
var number = identityType(5);
var text = identityType('Hello');
console.log(number, text);
//4
function calc(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}
console.log(calc(5, 10, '/'));
//5
function loggingIdentity(array) {
    console.log(array.length);
    return array;
}
loggingIdentity([1, 2, 3, 4]);
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
