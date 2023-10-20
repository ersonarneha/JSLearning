let arrayNumbers = [22,11,44,55,77,33];
console.log(`============ Even positioned value in a given array============`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index]; 
        console.log(element);
    }
    }
    console.log(`=========== Sum the array element ===========`);
   let sum = 0
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    
    sum = sum + element;

   

};
console.log(sum);



