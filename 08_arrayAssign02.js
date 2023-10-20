const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is : ${arrayNumbers}`);
console.log(`1.Total elements available in array : ${arrayNumbers.length}`);
console.log(
  `2.First element in array is : ${
    arrayNumbers[0]
  } and last element in array is : ${arrayNumbers[arrayNumbers.length - 1]}`
);
console.log(
  `3.Third last element in array is : ${arrayNumbers[arrayNumbers.length - 3]}`
);
console.log(`============ 4. all even numbers using for in loop=============`);
var result = " ";
for (const index in arrayNumbers) {
  const element = arrayNumbers[index];

  if (element % 2 == 0) {
    var result = result + element + " ";
   //console.log(result);
  }

}
console.log(result);
console.log(`============ 5.all odd numbers using for in loop=============`);
var result = " ";
for (const index in arrayNumbers) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    var result = result + element + " ";
  }
}
console.log(result);
console.log(`=========== 6.Even positioned elements===================`);;
var result = " ";
for (const index in arrayNumbers) {
  if (index % 2 == 0) {
    const element = arrayNumbers[index]
    var result = result + element + " ";
  
    
  }
}
console.log(result);
console.log(`=========== 7.Odd positioned elements===================`);
var result = " ";
for (const index in arrayNumbers) {
  if (index % 2 != 0) {
    const element = arrayNumbers[index]
    var result = result + element + " ";
    
  }
}
console.log(result);
console.log(`================ 8.Sum of all elements =================`);
var sum = 0;
for (const index in arrayNumbers) {
  const element = arrayNumbers[index]
  sum = sum + element;
 
}
console.log(sum);
console.log(`============ 9.Multiple of 5 ===============`);
var result = " ";
for (const index in arrayNumbers) {
  const element = arrayNumbers[index]
  if (element%5 == 0) {
    var result = result + element + " ";
    
  }
}
console.log(result);
console.log(`=========== 10. 115 available in array ===========`);
var isAvailable = arrayNumbers.includes(115);
console.log(`115 available in array : ${isAvailable}`);
console.log(`=========== 11. 23 available in array ===========`);
var isAvailable1 = arrayNumbers.includes(23);
console.log(`23 available in array : ${isAvailable1}`);
console.log(`============ 12.insert numbers=============`);
 
//var arrayNumber = [22,11,44,55,77,33];
//[22,11,500,55,77,33];
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`======== 13.Delete 3 elements ========`);

const removedElements = arrayNumbers.splice(4,3);  //index 2 pasun 2 elements remove krayche
console.log(arrayNumbers);
//console.log(removedElements);





