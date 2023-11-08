//Destructing Array

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
const [first, second] = restaurant.categories;
console.log(first, second);

//Skip elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//TODO Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
//!  OR
//TODO Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

//TODO Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//TODO Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
//! OR
const [i, , [j, k]] = nested;
console.log(i, j, k);

//___________________________________________________________________________________________

//Destructing Objects
//! same name as the property ==> restaurant.name
const { name, categories, location } = restaurant;
console.log(name, categories, location);

//! different name as the property ==> restaurant.name
const { name: restaurantName, categories: tags, location: place } = restaurant;
console.log(restaurantName, tags, place);

//! default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//! Mutating variables
({ mainMenu, starterMenu } = restaurant);
console.log("mainMenu", mainMenu);
console.log("starterMenu", starterMenu);

//! Nested Objects
const { fri } = restaurant.openingHours;
console.log(fri);
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

//___________________________________________________________________________________________
//TODO Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//! Spread Operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//! Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//! Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

//! Spread can be used in : arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);

//! Spread Operator in function
