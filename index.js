// Iteration 1: Names and Input
const hacker1 = "Monica";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Roberta";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops
let hackerCapital = "";

for (let i = 0; i < hacker1.length; i++) {
  hackerCapital += hacker1[i].toUpperCase() + " ";
}
console.log(hackerCapital);

let appoggio = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  let hackerReverse = hacker2[i];
  appoggio += hackerReverse;
}
console.log(appoggio);

if (hacker1.localeCompare(hacker2 === 1)) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Yo, the navigator goes first, definitely.");
} else console.log("What?! You both have the same name?");
