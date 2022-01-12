// Hygor Costa
// cost0142@algonquinlive.com

"use strict";

// 1. Read the JSON file into a variable called students
let students = require("./students.json");

// 2. Iterate over the students array and print Hello with their full names to the console
let count = 0;
students.forEach(({ firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);

  // 3. Print out the number of last names starting with the letter D
  // e.g. Count of last names starting with D is 1
  if (lastName.charAt(0) === "D") {
    count = count + 1;
  }
});

console.log(`Count of last names starting with D is ${count}`);
