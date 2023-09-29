console.log(`=========Step 1===========`);
function SquareOfWordLength(value) {
  var lengthOfStr = value.length;

  var result = lengthOfStr * lengthOfStr;
  console.log(
    `Length of word ${value} is ${lengthOfStr} and square of length is ${result}`
  );

  return result;
}
var result = SquareOfWordLength("Javascript");
var result = SquareOfWordLength("Google Chrome");
var result = SquareOfWordLength("Developer Smart");
console.log(`================step 2==============`);
function position() {
  var str = "I am Angular Developer";
  var stringLength = str.length;
  console.log(`Length of the string is : ${stringLength}`);
  var words = str.split(" ");
  console.log(words);
  console.log(`Total words available in the string is:${words.length}`);
  console.log(
    `Total string length divided by total words is : ${
      str.length / words.length
    } `
  );
  console.log(
    `Total string length multiplied by total words is : ${
      str.length * words.length
    } `
  );
}
position();
