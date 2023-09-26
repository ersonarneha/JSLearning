var strName = "Vishal";
var result = typeof strName;
console.log(result);
console.log("===========Length property==========");
var greet = "Good Morning";
var totalLength = greet.length;
console.log("Length of the string is:", totalLength);

console.log("==============charAt()===============");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is:", charAt0);

greet.charAt(5);
console.log("Char stored at index 5 is:", greet.charAt(5));

var lastIndex = greet.charAt(11);
console.log("Last index char in greet is:", lastIndex);

var str =
  "Government college of engineering,Jalgaon having 6 departments and located oh highway no 6";
str.length;
var lastIndexChar = str.charAt(str.length - 1);
console.log("last indes char in str is:", lastIndexChar);
//find the 3rd last char
var lastThirdIndexChar = str.charAt(str.length - 3);
console.log("last indes char in str is:", lastThirdIndexChar);

console.log("==============concatenation============");
var firstName = "Jenny";
var lastName = "Gates";
var result = firstName.concat(lastName);
console.log(result);

console.log("============IndexOf====================");
var indexOfM = greet.indexOf("M");
console.log("Index of M is:", indexOfM);

console.log(greet.indexOf("nin"));

console.log("Index of char z:", greet.indexOf("z"));
console.log("Index of char D:", greet.indexOf("D"));
console.log("Index of char o:", greet.indexOf("o"));

console.log("=============Replace==============");
var result = greet.replace("Morning", "Afternoon");
console.log(result);
var result = greet.replace(" ", "-");
console.log(result);

var result = greet.toUpperCase();
console.log(result);
console.log("===============trim()============");
var stri = "   Good Afternoon  ";
var lengthBeforeTrim = stri.length;
console.log('Length before trim,',stri.length);
var result = stri.trim();
console.log("Length after trim:",result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are:',result);

var city = "  My city is Pune    ";
var beforeTrim = city.length;
var cityAfterEndTrim = city.trimEnd();
var lengthAfterEndTrim = cityAfterEndTrim.length;
console.log(lengthAfterEndTrim);
