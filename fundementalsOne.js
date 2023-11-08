//~difference between var and let and const
//TODO ==> var is old way to declare variable and it is global variable and can be changed (reAssigned)
var firstName = "Jonas";
var firstName = "Bob";
console.log(firstName);

//TODO ==> let is new way to declare variable and it is local variable and can be changed (reAssigned)
let lastName = "Jonas";
// let lastName = "Bob"; //! error
lastName = "Bob";
console.log(lastName);

//TODO ==> const is new way to declare variable but it is constant CANNOT BE CHANGED
const birthYear = 1991;
// birthYear = 1990; //! error
// const job; //! error
const job = "teacher";
console.log(birthYear, job);

//___________________________________________________________________________________________
//Primitive data Types are NOT  Object

//number , string , boolean , undefined , null , symbol , bigint
let age = 30;
let name = "Jonas";
let isMarried = false;
let lastNamee; //EMPTY VARIABLE  let lastNamee= undefined;
let middleName = null;
let symbol = Symbol("id");
let bigInt = 1234567890123456789012345678901234567890n;

//___________________________________________________________________________________________
//Dynamic Typing and type of Function
//JS is dynamic language

let myAge = 30;
myAge = "thirty";
console.log(myAge);
//typeof ==> For getting the dataTypes
console.log(typeof myAge);

// Convert STRING to Number
let x = "3" * 1;
console.log("Type of x after Convert", typeof x);

const inputYear = "1991";
console.log("Convert String to Number ", Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//Convert Numnber to String
const w = 250;
console.log("Number to String", String(w), typeof String(w));

//power
console.log("POWER : " + 2 ** 3);

//___________________________________________________________________________________________
//STRINGS
const fisrt = "Omar";
const last = "AbouRomia";
const jobb = "Developer";
const birthYearr = 1991;
const year = 2037;

const omar =
  "I'm " + fisrt + ", a " + (year - birthYearr) + " years old " + jobb;
console.log(omar);

const omarNew = `I'm ${fisrt}, a ${year - birthYearr} years old ${jobb}`;

//concatination
console.log("String Concatination : " + fisrt + " " + last);
//___________________________________________________________________________________________
//Assignement Operators ==> //! return the value
let x1 = 10 + 5; //15
x1 += 10; //x1 = x1 + 10 = 25
x1 *= 4; //x1 = x1 * 4 = 100
x1++; //x1 = x1 + 1
x1--; //x1 = x1 - 1

//___________________________________________________________________________________________
//Comparison Operators ==> //! return boolean TRUE or FALSE
// TODO  >, <, >=, <=
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log("isFullAge : " + isFullAge);
if (isFullAge) {
  console.log("Sarah is Full Age");
} else {
  console.log("Sarah is NOT Full Age");
}

//___________________________________________________________________________________________
//LOGICAL OPERATORS ==> AND && , OR || , NOT ! ==> //! return boolean TRUE or FALSE
const f = false;
const t = true;
console.log("AND OPERTAION", t && f);
console.log("OR Operator", t || f);
console.log(!t);

//___________________________________________________________________________________________
//Falsy Values : 0, '', undefined, null, NaN
//Truthy Values : NOT Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0; //Flasy Value
if (money) {
  console.log("Don't spend it all"); //SKIP
} else {
  console.log("You should get a job"); //PRINT
}
//___________________________________________________________________________________________
//Equality Operators ===, ==
const age2 = "18";
//! lazem ykon el type same
if (age2 === 18) console.log("You just became an adult :D (strict)"); //will not print
//! == convert the type
if (age2 == 18) console.log("You just became an adult :D (loose)");

//___________________________________________________________________________________________
//Switch Statement
const day = "monday";
switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
//___________________________________________________________________________________________

//SHORT IF ELSE  //! (CONDITION)? TRUE : FALSE
const age3 = 23;
age3 >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");
