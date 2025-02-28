// A loop is used to execute a block of code {} repeatedly for a number of times

// While loop, for loop

let startingPoint = 40;
while (startingPoint < 400) {
  console.log("loop number" + startingPoint);
  startingPoint = startingPoint + 3;
  // Increase starting point by three after evey loop
}

let studentMarks = [23, 56, 87, 99, 95, 62, 47, 32, 90, 59, 25];
console.log(studentMarks[1]);

let index = 0;

while (index < studentMarks.length) {
  // grading
  let currentMark = studentMarks[index];
  if (currentMark < 0 || currentMark > 100 || typeof currentMark !== "number") {
    console.log("Error!Invalid Mark");
  } else if (currentMark >= 80) {
    console.log("Mark" + currentMark + "is Grade: A");
  } else if (currentMark >= 65) {
    console.log("Mark" + currentMark + "is Grade: B");
  } else if (currentMark >= 50) {
    console.log("Mark" + currentMark + "is Grade: C");
  } else if (currentMark >= 40) {
    console.log("Mark" + currentMark + "is Grade: D");
  } else {
    console.log("Mark" + currentMark + "is Grade: E");
  }
  // increament
  index = index + 1;
}
