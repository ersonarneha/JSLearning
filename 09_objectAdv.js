let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city : "Pune"
  };
   const keys = Object.keys(person)
console.log(keys);

const values = Object.values(person)
console.log(values);

const valueArray = ['name','age','isMarried','city']

const entry = Object.entries(person);  //[[],[],[],[]]
console.log(entry);
for (const element of entry) {
  console.log(element[0],element[1]);
}

const array0th = entry[0]; //['name','Jenny']
console.log(array0th);

console.log(`=====Traversing of an object============`);
for (const key in person) {
 console.log(key,person[key]);
}
const isNameAvailable = 'name' in person;
console.log(isNameAvailable);

const isPinAvailable = 'pin' in person;
console.log(isPinAvailable);

const personJenny = {
  name : "Jenny",
  age : 22,
  isMarried : true,
  city : "Pune"
}
personJenny.age = 25;
console.log(personJenny);

//personJenny = { }; Not allowed
Object.freeze(personJenny);

personJenny.city = "Lucknow";
console.log(personJenny);
console.log(`========Object.assign()======`);
let elon = {
  name : "elon",
  age : 54,
  isMarried : true,
  country : "USA"
}
const eloneClone = Object.assign({},elon)
console.log(eloneClone);
console.log(`========== Merging an object ============`);
let stew = {
  name : "stew",
  age : 54,
  isMarried : true,
  country : "USA"
}

const address = {
  pin : 234567,
  city : "Austin Texas"
}
Object.assign(stew,address);
console.table(stew);




