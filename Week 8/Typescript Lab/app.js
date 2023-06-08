"use strict";
const boss = {
    name: "Michael Scott",
    weight: 160,
};
boss.weight;
const add = (x, y) => {
    return x + y;
};
console.log(add(10, 6)); // ✅ No problem
//   console.log(add(10, "6")); // 🙌 Typescript Compile-Time Error! Safe.
// let age = 27;
// let hairColor = "black";
// let isAdult = age >= 18;
// let nullValue = null;
// let undefinedValue = undefined;
// Some types will take awhile to discover
// Dates
const now = new Date();
// Typescript works both in client-side javascript as well as Node!
const el = document.getElementById('div');
// The code above will give you an error. The reason
// is because getElementById COULD return null if we
// cannot find the div. 
// Solution 1: const el: HTMLElement | null = document.getElementById('div');
// Solution 2: const el: HTMLElement = document.getElementById('div')!;
// Arrays
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];
const json = '{"firstName": "Jamie", "grade": 100}';
const student = JSON.parse(json);
console.log(json); // {firstName: "Jamie", grade: 100 };
let numberOfFriends; // number
numberOfFriends = 37;
const multiplier = (a, b) => {
    return a * b;
};
// Arrow function example
const subtract = (a, b) => {
    console.log(a - b);
};
// Function Expression example
const multiply = function (a, b) {
    return a * b;
};
// can return 'null' or 'undefined' with 'void' return type
const logger = (message) => {
    console.log(message);
};
// Function that will never return, we can use never
const throwError = (message) => {
    throw new Error(message);
};
// if it may possibly return a 'string' then we annotate it as such
const throwError2 = (message) => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
// if there's a chance it may return 'void' then we annotate it as such
const throwError3 = (message) => {
    if (!message) {
        throw new Error(message);
    }
};
const greetSomeone = (person) => {
    console.log(`Hello ${person.firstName}`);
};
greetSomeone({ firstName: "john" }); // lastName not mandatory
// define weather object...
const vancouverWeather = {
    date: new Date(),
    weather: 'sunny'
};
// annotation of forecast argument which is a weather object...
const logWeather = (forecast) => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
logWeather(vancouverWeather);
// ES6 Destructuring (Very Common)
const logWeather2 = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};
logWeather2(vancouverWeather);
const logWeather3 = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};
const profile = {
    firstName: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    }
};
// const age = profile.age;
// ES2015 object destructuring - no annotation
// const { age } = profile;
// wrong!
// const { age }: number = profile;
// right
// const { age }: { age: number } = profile;
const { age, firstName } = profile;
const { coords: { lat, lng } } = profile;
const teacher = {
    name: "Armaan",
    hairColor: "black",
    hobbies: ["Programming", "Jogging"], // (property) hobbies: string[]
};
for (const hobby of teacher.hobbies) {
    console.log(hobby.toUpperCase()); // correct detects it is a string
    console.log(hobby.map()); // Knows that property 'map' does not exist on 'string'.
}
const teacher1 = {
    name: "Armaan",
    hairColor: "black",
    hobbies: ["Programming", "Jogging"],
};
const teacher2 = {
    name: "James",
    hairColor: "black",
    hobbies: ["Programming", "Swimming"],
};
let listOfTeachers = [teacher1, teacher2];
