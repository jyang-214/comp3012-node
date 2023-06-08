const boss = {
	name: "Michael Scott",
	weight: 160,
};

boss.weight;

const add = (x: number, y: number) => {
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
const now: Date = new Date();
// Typescript works both in client-side javascript as well as Node!
const el: HTMLElement | null = document.getElementById("div");

// The code above will give you an error. The reason
// is because getElementById COULD return null if we
// cannot find the div.
// Solution 1: const el: HTMLElement | null = document.getElementById('div');
// Solution 2: const el: HTMLElement = document.getElementById('div')!;

// Arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

const json = '{"firstName": "Jamie", "grade": 100}';

const student: { firstName: string; grade: number } = JSON.parse(json);
console.log(json); // {firstName: "Jamie", grade: 100 };

let numberOfFriends: number; // number
numberOfFriends = 37;

const multiplier = (a: number, b: number): number => {
	return a * b;
};

// Arrow function example
const subtract = (a: number, b: number): void => {
	console.log(a - b);
};

// Function Expression example
const multiply = function (a: number, b: number): number {
	return a * b;
};

// can return 'null' or 'undefined' with 'void' return type
const logger = (message: string): void => {
	console.log(message);
};

// Function that will never return, we can use never
const throwError = (message: string): never => {
	throw new Error(message);
};

// if it may possibly return a 'string' then we annotate it as such
const throwError2 = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}

	return message;
};

// if there's a chance it may return 'void' then we annotate it as such
const throwError3 = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

const greetSomeone = (person: { firstName: string; lastName?: string }) => {
	console.log(`Hello ${person.firstName}`);
};
greetSomeone({ firstName: "john" }); // lastName not mandatory

// define weather object...
const vancouverWeather = {
	date: new Date(),
	weather: "sunny",
};

// annotation of forecast argument which is a weather object...
const logWeather = (forecast: { date: Date; weather: string }): void => {
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

const logWeather3 = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

const profile = {
	firstName: "alex",
	age: 20,
	coords: {
		lat: 0,
		lng: 15,
	},
};

// const age = profile.age;

// ES2015 object destructuring - no annotation
// const { age } = profile;

// wrong!
// const { age }: number = profile;

// right
// const { age }: { age: number } = profile;

const { age, firstName }: { age: number; firstName: string } = profile;

const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

const teacher = {
	name: "Armaan",
	hairColor: "black",
	hobbies: ["Programming", "Jogging"], // (property) hobbies: string[]
};

for (const hobby of teacher.hobbies) {
	console.log(hobby.toUpperCase()); // correct detects it is a string
	console.log(hobby.map()); // Knows that property 'map' does not exist on 'string'.
}

interface Teacher {
	name: string;
	hairColor: string;
	hobbies: string[];
}

const teacher1: Teacher = {
	name: "Armaan",
	hairColor: "black",
	hobbies: ["Programming", "Jogging"],
};

const teacher2: Teacher = {
	name: "James",
	hairColor: "black",
	hobbies: ["Programming", "Swimming"],
};

let listOfTeachers: Teacher[] = [teacher1, teacher2];
