//Object creation using object literals
let person = {
  name: "Jenny",
  age: 22,
  isMarried: true,
  show: function () {
    console.log(`Hi Hello,How are you ?`);
  },
};
console.log(typeof person);
console.log(person);

//Propert Access
//1.Dot Notation
let personName = person.name;
console.log(`Person name is : ${personName}`);

console.log(`Person age is : ${person.age} `);

//1.[] Notation
let nameOfPerson = person["name"];
console.log(`Person name is : ${nameOfPerson}`);

console.log(`Adding propert in object`);
person.city = "Pune";
console.log(person);
// console.table(person);

console.log(`Update property in object`);
person.age = 20;
console.log(person);

console.log(`Delete  property from an object`);
delete person.age;
console.log(person);

console.log(`Adding method in an object`);
person.show();
person.display = function () {
  console.log(`I am inside display function`);
};
console.log(person);
person.display();
console.log(`============Nested Object================`);
const personElon = {
  name: "Elon Musk",
  age: 54,
  totalCompany: 9,
  companies: {
    tesla: {
      companyName: "Tesla",
      totalEmployee: 4500,
      location: "USA",
    },

    twitter: "150B USD",
    spacex: "200B USD",
  },
  kidsName: ["Deny", "Weny", "Rony", "Randy"],
};
console.log(personElon.companies.tesla);
console.log(`kid ar 0 index:${personElon.kidsName[0]}`);
console.log(`total no of kids:${personElon.kidsName.length}`);
//add stew in last
personElon.kidsName.push("stew");

for (const kid of personElon.kidsName) {
  console.log(kid);
}
console.log(personElon.companies.tesla.location);
