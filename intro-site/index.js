function sum(arr) {
  return arr.reduce((currentSum, num) => currentSum + num);
}

// was kommt hier wohl raus?
const sumResult = sum([3, 3, "3"]);
// console.log(sumResult);

// wo ist der Fehler?
// wir wollen: "HI!"
const shoutHi = "Hi!   ".trimsEnd().toLocalUppercase();
// console.log(shoutHi);
