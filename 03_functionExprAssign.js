console.log(`==============Step 1 :Square of numbers =================`);
var square = function (arg) {
  var result = arg * arg;
  console.log(`Suare of the number ${arg} is ${result}`);
};
square(5);
square(6);
square(25);
square(100);
square(67);
square(89);
square(59);
console.log(`===========step 2=========`);
console.log(`type of function square is:`, typeof square);
console.log(`=========Step 3 : Area of Rectangle======================`);
var areaOfRectangle = function () {
  var length = 499;
  var width = 917;
  var result = length * width;
  console.log(`Area of rectangle is : ${result}`);
};
areaOfRectangle();
console.log(`===============Step 4=================`);
var swapValues = function (value1, value2) {
  console.log(`Before swap:${value1},${value2} `);
  var temp = value1;
  var value1 = value2;
  var value2 = temp;
  console.log(`After swap:${value1},${value2}`);
};
swapValues("Mahi", "Raina");
console.log(`------------------`);
swapValues(55, 77);
console.log(`==================Step 5 ==================`);
var string = function () {
  var str = "JS the most popular language of internet";
  console.log(`Given string is :${str}`);
  console.log(`Total characters in the string is:${str.length}`);
  console.log(`Character at index 6 is : ${str.charAt(6)}`);
  console.log(`Character at index 11 is : ${str.charAt(11)}`);
  console.log(`Character at last index is : ${str.charAt(str.length - 1)}`);
  console.log(`Character at first index is : ${str.charAt(0)}`);
  console.log(
    `Character at third last index is : ${str.charAt(str.length - 3)}`
  );
  var words = str.split(" ");

  totalWords = words.length;
  console.log(`Total no of words available in string is : ${totalWords}`);
  var result = totalWords * totalWords;
  console.log(
    `Square of the total no of words available in string is : ${result}`
  );
};
string();
