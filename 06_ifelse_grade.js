console.log(`============if else statement============`);
var voteEligible = function (age){
if (age==0 || age<0 || age>130 || age==undefined || age==null) {
    console.log(`${age} : Invalid data`);
} else {
    if (age<18) {
        console.log(` ${age} : Not eligible for vote`);
    } else {
        console.log(`${age} : Eligible for vote`);
    }
}
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);



































