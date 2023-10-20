console.log(`===========Object cloning and traversing assignment===============`);
console.log(`============ Creating bankSbi object =============`);
let bankSbi = {
    bankName: "Bank-State bank of India",
    location: "Branch-Baner,Pune",
    accountNo: "AC No-15423686565",
    ifscCode: "IFSC-SBIN0012345",
    interestRate: "IR-6.9%"
    };
  console.log(bankSbi);
  console.log(`============ Creating bankLocation object =============`);
  let bankLocation = {
    street : "Pune Banglore highway",
    city : "Pune",
    pin : 412105
  }
  console.log(bankLocation);
console.log(`=========== Cloning object ===========`);
 const bankSbiClone = Object.assign({},bankSbi)
//console.log(`SBI bank object cloning :${bankSbiClone}`);
console.log(bankSbiClone);

console.log(`=========== Cloning object bank location ===========`);
 const bankLocationClone = Object.assign({},bankLocation)
//console.log(` bank location object cloning :${bankLocationClone}`);
console.log(bankLocationClone);

console.log(`========Step 4==========`);
let rateOfInterest = {
  homeLoanInterest : "7.5 %",
  personalLoanInterest :"12 %",
  dueInterest : "10 %"
}

console.log(rateOfInterest);
console.log(`======= Step 5-Merging of object ============`);
let sbiDetails = {
  branchCode: "005566",
}
Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest)
//console.log(`Object after merging --${sbiDetails}`);
console.log(sbiDetails);
console.log(`=======Traversing merged object===========`);
for (const key in sbiDetails) {
  
  console.log(`${key}: ${sbiDetails[key]}`);
}