let professor = {
    name :  "Mr R L Joshi",
    age : 45,
    education :" M TECH",
    height : "6 ft",
    city : "Pune",
    degrees : {
        engineering : 'CSC',
        PHD : 'Adv Computing',
    },
    certificates : ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming']
}
console.log(professor);
console.log(`=======Adding new property===========`);
professor.totalExperience = "14 years";
console.log(`Adding experience : ${professor.totalExperience}`);
console.log(`=========== Modify existing property=========`);
professor.age = 48;
console.log(`======= Add new element at last position in array ============`);
professor.certificates.push("Oracle Certified")
console.log(`Last element of array : ${professor.certificates[professor.certificates.length-1]}`);
console.log(`============== Complete Object==========`);
console.log(professor);
console.log(`===========Traverse Array============`);
for (const info of professor.certificates) {
    console.log(info);
}






