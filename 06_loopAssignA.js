console.log(`============= No of vowels counting ===========`);
var str = "I am very good IT Developer";
var count = 0;
var vowelCap = "AEIOU";

for (let index = 0; index < str.length - 1; index++) {
  var char = str.charAt(index).toUpperCase();
  if (vowelCap.includes(char)) {
    count = count + 1;
  }
}
console.log(`Given string is :${str}`);
console.log(`Total no of vowels are :${count}`);
console.log(`=========== Sum of cube of numbers===========`);
var result = 0;
// 1*1*1 + 2*2*2 +3*3*3 + 4*4*4 + 5*5*5
for (let index = 1; index <= 5; index++) {
  result = result + index * index * index;
}
console.log(`Sum of cube of numbers :${result}`);
console.log(`===============function==> odd positioned char in string 1 ============`);
var string1 = "Hard work always pays back";
var string2 = "Soon I will be Angular IT Champ";
function oddPositionedChars(str) {
  for (let index = 0; index < str.length - 1; index++) {
    if (index % 2 != 0 && str.charAt(index) != " ") {
      console.log(str.charAt(index));
    }
  }
}
oddPositionedChars(string1);
console.log(`===============function==> odd positioned char in string 2 ============`);

oddPositionedChars(string2);
