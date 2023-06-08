"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayBye = exports.sayHello = void 0;
// In a file called greeter.ts
const sayHello = (name) => {
    return `Hello ${name}`;
};
exports.sayHello = sayHello;
const sayBye = (name) => {
    return `Goodbye ${name}`;
};
exports.sayBye = sayBye;
