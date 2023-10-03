var n1 = "20";
var n2 = 20;
console.log(n1==n);

console.log(n1,typeof n1);
n1=+n2;
console.log(n1,typeof n1);

console.log('4'-true);  //4-1
console.log(`Ans:'4' implicit converted to 4 (number) and true (Boolean)`);

//string to Number
//1.Using + operator
//2.Number
var n1 = "20";
var n2 = Number(n1);  //Number("20")
console.log(n2,typeof n2);
var isMarried = true;
var result = Number(isMarried);
console.log(result,typeof result);

var n4 = 30;
var result = String(n4);
console.log(result,typeof result);

var result = Boolean("Jenny");
console.log(result,typeof result);

var result = Boolean ('')
console.log(result,typeof result);

var result = Boolean ('2')
console.log(result,typeof result);

console.log("===========Implicit conversion to String==========");
//numeric string used with + gives string type
 var result;

 result = '3' + 2;
 console.log(result); //"32"

 result = '3' + true;
 console.log(result); //"3true"

 result = '3' + undefined;
 console.log(result); //"3undefined"

 result = '3' + null;
 console.log(result); //"3null"

 console.log("============Implicit boolean conversion to Number============");
//if boolean is used,true is 1,false is 0

var result;

result = '4' - true;
console.log(result); //3
 
result = '4' + true;
console.log(result); //5

result = '4' + false;
console.log(result); //4

console.log("============Implicit string conversion to Number============");
//numeric string used with -,/,* results number type
var result;

result = '4' - '2';
console.log(result); //2

result = '4' - 2;
console.log(result); //2

result = '4' * '2';
console.log(result); //8

result = '4' / '2';
console.log(result); //2

console.log("============Undefined used with number,boolean or null gives NaN=============");
//Arithmatic operation of undefined with number,boolean or null gives NaN

var result;

var result = 4 + undefined;
console.log(result); //NaN

var result = 4 - undefined;
console.log(result); //NaN

var result = true + undefined;
console.log(result); //NaN

var result = null + undefined;
console.log(result); //NaN

console.log("=====Explicit conversion:Convert number strings and boolean values to numbers");
//In that case we can use Number()

//String to number

result = Number('324')
console.log(result); //324

result = Number('324e-1')
console.log(result); //32.4

//boolean to number
result = Number(true)
console.log(result); //1

result = Number(false)
console.log(result); //0

console.log("======Exlicit conversion:Invalid string to number return NaN======");
//If a string is an invalid number,the result will be NaN.for example,

var result;
result = Number('hello');
console.log(result); //NaN
 
result = Number(undefined);
console.log(result); //NaN

result = Number(NaN);
console.log(result); //NaN
console.log("======Explicit conversion:string to number using + operator========");
var numberInString = "100";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);





