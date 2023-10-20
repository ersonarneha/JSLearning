const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(
  `1.First element in array is : ${
    arrayFruits[0]
  } and last element in array is : ${arrayFruits[arrayFruits.length - 1]}`
);
console.log(
  `========================= 2. adding element Papaya before Banana =====================`
);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(
  `========================= 3.Array after removing mango ========================`
);
console.log(`Given array is : ${arrayFruits}`);
const arraySpliced = arrayFruits.splice(4, 1);

console.log(arrayFruits);
console.log(
  `=================== 4.Array after adding pineapple in last position =====================`
);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(
  `==================== 5.Insert an element Dragon fruit before water melon ====================`
);
arrayFruits.splice(arrayFruits.length - 2, 0, "Dragon fruit");
console.log(arrayFruits);
console.log(
  `===================== 6.Replace orange with kiwi ==============================`
);
arrayFruits.splice(2, 1, "Kiwi");
console.log(arrayFruits);
console.log(
  `=========================== 7.log the elements 1 to 4 index ==================`
);
var slicedArray = arrayFruits.slice(1, 5); //index 4 exclude ast
console.log(slicedArray);
console.log(
  `===================== 8.last three elements in array ===================`
);
var slicedArray1 = arrayFruits.slice(arrayFruits.length - 3); //index 4 exclude ast
console.log(slicedArray1);
