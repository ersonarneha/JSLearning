


var girlAge = 19;
if (girlAge>=18) {
    console.log(`You could go inside office`);
    console.log(`Have you informed your parent`);
    console.log(`Signed...Congrats!!!`);
}
console.log(`Daily life`);

var elonAge = 17;
//If age is greater than equal 18 then allow for vote else no.
if (elonAge>=18) {
    console.log(`Welcome..Elon`);
    console.log(`Please let me mark your finger with ink`);
    console.log(`Please now vote`);
} else {
    console.log(`Yet you are not eligible for vote`);
    console.log(`Try next time please`);
}
console.log(`===============================`);
var voteEligible = function(age){
    var result = +age
    if (age==0 || age<0 || age>130 || age==null || isNaN(result)) {
        console.log(`Invalid data : ${age}`);
    } else {
        if (age<18) {
            console.log(`You are not eligible for vote.age:${age}`);
        } else {
            console.log(`You are eligible for vote.age:${age} `);
        }
    }
}
voteEligible(0);
voteEligible(130);
voteEligible(-20);
voteEligible(null);
voteEligible(undefined);
voteEligible("Jenny");
voteEligible("Infosys");

voteEligible(17);
voteEligible(25);
voteEligible(131);














