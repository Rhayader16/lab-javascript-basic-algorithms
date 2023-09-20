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

// Extra1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a lacus consectetur, condimentum sapien a, accumsan purus. Nullam quis maximus mauris. Suspendisse posuere mauris at volutpat malesuada. Nullam nec est vel nibh aliquam euismod. Pellentesque vel ipsum ex. Morbi consequat scelerisque tortor eget ullamcorper. Aenean id velit lorem. Praesent consequat urna sit amet ipsum consequat, eu malesuada orci pellentesque. Aenean egestas leo ac eleifend commodo. Quisque nec neque sed est consectetur tempus quis vitae velit. Aliquam sed pellentesque est. Integer vulputate enim diam, placerat commodo odio porttitor non. Maecenas et vulputate dolor. Integer eget tortor vestibulum, fringilla massa fringilla, ultrices quam. Aenean varius tristique dapibus. Suspendisse in molestie justo, non convallis libero. Etiam ullamcorper ullamcorper ligula, ac ultricies urna tempor quis. Donec urna urna, porttitor sit amet purus nec, semper sollicitudin augue. Nullam in tristique nunc. Sed purus purus, vehicula id nunc a, congue hendrerit sapien. Suspendisse gravida eros leo, et vehicula elit mollis non. Nullam eu efficitur nisl. Donec et ullamcorper tortor. Cras tempor massa vitae justo suscipit, id volutpat dolor lobortis. Donec auctor, lacus non tincidunt tincidunt, libero ex interdum lorem, sed consequat orci mi at urna. Duis placerat hendrerit lobortis. Sed mattis tincidunt dignissim. Mauris eget libero ac tortor egestas dictum at vulputate eros. Etiam fringilla ex ac suscipit sollicitudin. In volutpat, leo vitae consectetur viverra, velit lacus tristique neque, at aliquet ex ipsum vitae augue. Donec faucibus neque id mauris volutpat, eu ornare ligula vehicula. Sed viverra eros eu nunc egestas, id maximus ex interdum.Etiam fermentum consectetur neque non aliquam. Nulla a fringilla dolor. Ut at egestas nunc. Suspendisse mattis tempor quam placerat ullamcorper. Morbi vel mi mattis, scelerisque neque non, ultrices ex. Morbi eleifend et mi pulvinar congue. Donec rutrum pharetra imperdiet. Praesent eleifend vel urna non volutpat";
let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] === " " &&
    longText[i + 1] === "e" &&
    longText[i + 2] === "t" &&
    longText[i + 3] === " "
  ) {
    etCount++;
  }
}
console.log("This paragraph contains" + longText.length + "words.");
console.log(`There are ${etCount} "et" inside this paragraph`);
