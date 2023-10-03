var n1 = 0;
var n2 = "";
var result = n1 == n2;
console.log(
  `Here n1 is ${n1} and n2 is ${n2},and n1==n2 is ${result},here empty string converts in 0 implicitely`
);

var n1 = 0;
var n2 = "0";
var result = n1 == n2;
console.log(
  `Here n1 is ${n1} and n2 is ${n2},and n1==n2 is ${result},here number converts in string implicitely`
);

var n1 = 0;
var n2 = false;
var result = n1 == n2;
console.log(
  `Here n1 is ${n1} and n2 is ${n2},and n1==n2 is ${result}, value of false is 0 thats why n1 == n2`
);

var n1 = null;
var n2 = undefined;
var result = n1 == n2;
console.log(`Here n1 is ${n1} and n2 is ${n2},and n1==n2 is ${result},`);

var n1 = 1;
var n2 = [1];
var result = n1 == n2;
console.log(`Here n1 is ${n1} and n2 is ${n2},and n1==n2 is ${result},`);

var n1 = 1;
var n2 = true;
var result = n1 == n2;
console.log(
  `Here n1 is ${n1} and n2 is ${n2},and n1==n2 is ${result},value of true is 0 thats why n1 == n2`
);

var n1 = 1;
var n2 = "1";
var result = n1 == n2;
console.log(
  `Here n1 is ${n1} and n2 is ${n2},and n1==n2 is ${result},here number value converts in string value implicitely`
);
