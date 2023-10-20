


//3! = 1 * 2 *3 ==>6
//3! = 3 * 2 * 1 ==>6
//4! = 4*3*2*1 ==>24
//5! = 120



function factorial(){
    let factNum = 1; //5
    for (let index = 5; index >=1; index--) {
        factNum = factNum * index;
        
    }
    console.log(`Factorial of ${num} is ${factNum}`);
}
factorial(5);
factorial(7);
factorial(10);
console.log(`============ Prime Number=========`);
//11 
function isPrime(num){
for (let index = 2; index >=0; index++) {
    if (num%index!=0) {
        console.log(num);
    }
    
}
};
isPrime(13);



















