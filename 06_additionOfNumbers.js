// 1 to 10
var sum = 0; //1    3
for (let index = 0; index <=10; index++) {
    sum = sum + index; //0+1    1+2
    
}
console.log(`Addition of 1 to 10 is:${sum}`);

//1 2 3 4 5 6

//Reverse the string
var str = "Developer";
var reverseStr = "";
for (let index = str.length-1; index>=0; index--) {
    reverseStr =  reverseStr + str.charAt(index)
    
}
console.log(`Reverse string is :${ reverseStr}`);
console.log(`================`);
//Count the vowels
var str = "I am ui developer";
var count =0;
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index);
    if (char=='a' || char=='e' ||char=='i' ||char=='o' ||char=='u' ) {
        count = count +1;
    }
    }
console.log(`Total no of vowels are :${count}`);
console.log(`----------------------`);
var str = "I am ui developer";
var count =0;
var vowelCap = "AEIOU"
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index);
    if (vowelCap.includes(char)) {
        count = count +1;
    }
    }
    console.log(`Total no of vowels are :${count}`);
    console.log(`----------------------`);
    var str = "I am ui developer";
    var count =0;
    var vowelCap = "AEIOU";
    var vowelLower = "aeiou"
    for (let index = 0; index < str.length-1; index++) {
        var char = str.charAt(index);
        if (vowelCap.includes(char) || vowelLower.includes(char)) {
            count = count +1;
        }
        }
        console.log(`Total no of vowels are :${count}`);
        console.log(`----------------------`);
    var str = "I am ui developer";
    var count =0;
    var vowelCap = "AEIOU";
    
    for (let index = 0; index < str.length-1; index++) {
        var char = str.charAt(index).toUpperCase();
        if (vowelCap.includes(char)) {
            count = count +1;
        }
        }
        console.log(`Total no of vowels are :${count}`);
    
console.log(`=======================`);
var result;
// 1*1 + 2*2 +3*3 + 4*4 + 5*5
for (let index = 1; index <=5; index++) {
    result = result + index * index;
    
}
console.log(`Sum of square numbers :${result}`);
console.log(`=========================`);
function oddPositionedChars(str){
    for (let index = 0; index < str.length-1; index++) {
       if (index%2!=0 && str.charAt(index)!=" ") {
        console.log(str.charAt(index));
       }
        
    }
}
oddPositionedChars("abc")








