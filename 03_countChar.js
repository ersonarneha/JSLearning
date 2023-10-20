var string1 = "I am Learning JavaScript,The language of internet";

function countCharA(str) {
  var count = 0;
  var vowelCap = "A";
  var vowelLower = "a";
  for (let index = 0; index < str.length - 1; index++) {
    var char = str.charAt(index);
    if (vowelCap.includes(char) || vowelLower.includes(char)) {
      count = count + 1;
    }
  }
  console.log(`Total no of a or A in string--${string1} :${count}`);
}
countCharA(string1);
console.log(`=============================`);

var string2 = "My favourite movie is LAggAn";
function countCharAB(str) {
  var count = 0;
  var vowelCap = "A";
  var vowelLower = "a";
  for (let index = 0; index < str.length - 1; index++) {
    var char = str.charAt(index);
    if (vowelCap.includes(char) || vowelLower.includes(char)) {
      count = count + 1;
    }
  }
  console.log(`Total no of a or A in string-- ${string2} :${count}`);
}
countCharAB(string2);
