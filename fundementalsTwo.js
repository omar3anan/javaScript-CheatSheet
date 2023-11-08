//Functions
//! FIRST WAY  == FUNCTION DECLRATION
function Greeting(name) {
  console.log(`Hello ${name}`);
}
Greeting("omar");
Greeting("omar", "anan"); //NEGLICT the Second Parameter
Greeting(5);

function sum(x, y) {
  return x + y;
}
const result = sum(5, 9);
console.log("THE RESULT =", result);
//______________________________________________________________________________________

//! SECOND WAY  == Function Expression
//Other way to write Funcion using const Variable
const multiply = function (x, y) {
  return x * y;
};
resultMultiply = multiply(5, 9);
console.log(`Multiply = ${resultMultiply}`);
//______________________________________________________________________________________
//! THIRD WAY ==> ARROW FUNCTION (DONT USE Function Keyword)
//const FunctionName = (Parameters) => {body}

const calculateAge = (birthyear) => 2023 - birthyear;
const age = calculateAge(2001);
console.log(`AGE IS ${age}`);

const Person = (age, firstName, job) =>
  console.log(`Hello, ${firstName} you are ${age} ${job}`);

//Function parameter
Person(calculateAge(2001), "abouromia", "SWE");

//______________________________________________________________________________________
//! FUNCTION CALLING OTHER FUNCTION
const cutPieces = function (fruit) {
  return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
};
console.log(fruitProcessor(2, 3));

//______________________________________________________________________________________
//Arrays
const name = ["omar", "anan", "abouromia"];
console.log(name);
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[name.length - 1]); //last element
name[2] = "abouromiaaa"; //change the value of the array
Greeting(name);

const me = [22, "omar", true];
const myAge = me[0];
console.log("my age is", myAge);
//Build-in Methods
const friends = ["omar", "anan", "abouromia"];
friends.push("mohamed"); //add element to the end of the array
console.log(friends);
friends.unshift("mohamed"); //add element to the start of the array
console.log(friends);
friends.pop(); //remove the last element
console.log(friends);
friends.shift(); //remove the first element
console.log(friends);
console.log(friends.indexOf("omar")); //return the index of the element
console.log(friends.includes("omar")); //return true if the element is in the array
//______________________________________________________________________________________

//Objects
const omar = {
  firstName: "omar",
  lastName: "abouromia",
  age: calculateAge(2001),
  job: "SWE",
  friends: ["abed", "anan", "abouromia"],
};

console.log(omar);
//access elements in Objects
console.log(omar.firstName);
console.log(omar["lastName"]);

//concatinate String
const nameKey = "Name";
console.log(omar["first" + nameKey]);

//methods use this keyword
const omarr = {
  firstName: "omar",
  lastName: "abouromia",
  birthYear: 2001,
  job: "SWE",
  friends: ["abed", "anan", "abouromia"],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age} years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(omarr.calcAge());
console.log(omarr.age);
console.log(omarr.getSummary());

//______________________________________________________________________________________
//Loops
//For Loop

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

//Looping Arrays, Breaking and Continuing
const omarArray = ["omar", "abouromia", 2023 - 2001, "SWE", ["abed", "anan"]];
const types = [];
for (let i = 0; i < omarArray.length; i++) {
  console.log(omarArray[i], typeof omarArray[i]);
  types.push(typeof omarArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(calculateAge(years[i]));
}
console.log(ages);

//continue and break\
//!CONTINUE ==> when the loop find the number it will continue (skip)
console.log("----ONLY STRINGS----");
for (let i = 0; i < omarArray.length; i++) {
  if (typeof omarArray[i] !== "string") continue;
  console.log(omarArray[i], typeof omarArray[i]);
}
//!BREAK ==> when the loop find the number it will stop
console.log("----BREAK WITH NUMBER----");
for (let i = 0; i < omarArray.length; i++) {
  if (typeof omarArray[i] === "number") break;
  console.log(omarArray[i], typeof omarArray[i]);
}

//Looping Backwards and Loops in Loops
const omarArray2 = ["omar", "abouromia", 2023 - 2001, "SWE", ["abed", "anan"]];
for (let i = omarArray2.length - 1; i >= 0; i--) {
  console.log(omarArray2[i]);
}

//______________________________________________________________________________________
//While Loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

//Rolling Dice Game
//Math.trunc ==> remove the decimal part
//Math.random ==> random number between 0 and 1
//*6 ==> random number between 0 and 5
//+1 ==> random number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1; //random number between 1 and 6
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//______________________________________________________________________________________
