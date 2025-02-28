// Conditonal statments - allow execution ofa code block {}code depending on some state/condition/result/comparison

// if,else, switch

let birthYear = 2019;
if (2025 - birthYear > 55) {
  console.log("Sorry ,too old to be here");
} else if (2025 - birthYear > 18) {
  console.log("Welcome");
} else {
  console.log("Sorry, You are underage");
}

let marks = 101;

if (marks < 0 || marks > 100 || typeof marks !== "number") {
  console.log("ERROR!!Invalid Mark");
} else if (marks >= 80) {
  console.log("Grade:A");
} else if (marks >= 74) {
  console.log("Grade:A-");
} else if (marks >= 65) {
  console.log("Grade:B");
} else if (marks >= 50) {
  console.log("Grade:C");
} else if (marks >= 40) {
  console.log("Grade:D");
} else {
  console.log("Grade:E");
}
