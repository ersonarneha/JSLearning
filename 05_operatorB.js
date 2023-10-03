console.log(`==============Step 1=============`);
function greaterNumber(num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(
    `Given numbers are ${num1} and ${num2},in both greatest no is ${result}`
  );
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(`===========Step 2 ================`);
function isEvenOrOddNum(num) {
  var result = num % 2 == 0 ? true : false;
  console.log(`Given no ${num} is even:${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log(`============step 3============`);
function wordLength(word) {
  var lengthOfWord = word.length;
  var result = lengthOfWord % 2 == 0 ? "EVEN" : "ODD";
  console.log(`Given word ${word} has ${result} word length `);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
``  `   `