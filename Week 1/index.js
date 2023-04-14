// const os = require("os");    // import 'os' module

// const userInfo = os.userInfo();
// console.log(userInfo);

// const process = require("process");
// // setTimeout(() => {
// //     console.log(process.pid);
// // }, 15000)
// while(true){
//     console.log(process.pid);
// }

// const process = require("process");
// console.log(process.argv);

// function sayHello(fN, lN) {
//     console.log(`Hello ${fN} ${lN}!`)
// }

// const fName = process.argv[2];
// const lName = process.argv[3];
// sayHello(fName, lName);

const { argv } = require("process");
function sayHello(fN, lN) {
    console.log(`Hello ${fN} ${lN}!`)
}
const [,,fName,lName] = argv;
sayHello(fName, lName);