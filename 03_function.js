








var num1 = 100;
var num2 = 200;
console.log('before swap,',num1,num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log('After swap,',num1,num2);

var hubby = 'Virat';
var wife ='Anushka';
console.log('before swap,',hubby,wife);
var temp = hubby;
hubby = wife;
wife = temp;
console.log('after swap,',hubby,wife);
console.log("1)============Function type:function with  no arguments and no return type================");
function myPersonalDetails(){
    console.log("Name: GK");
    console.log('City:Pune');
    console.log('Pincode:412105');
    console.log('isMarried:Yes');
}
myPersonalDetails();


console.log("2)============Function type:function with arguments and no return type================");
console.log("================swap by using function================");
function swap(value1,value2){//function declaration
console.log('Before swap-->',value1,value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log('After swap-->',value1,value2);

}
swap(100,200); //function call or invocation
swap("Virat","Anushka");
swap('Pune','Mumbai');
swap('India','America')

console.log("3)============Function type:function with arguments and with return type================");
function jenny(rs){
    console.log('She went market and bought vagetables');
    var bag ='Vegetables required for a week';
    return bag;
}
var result = jenny(100);

function square(num){
var result = num *num;
return result;
}
var squareNum = square(5);
console.log('Num is 5 and its square is',squareNum);