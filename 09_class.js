let personElon = {
    name : "Jenny",
    age : 25,
    isMarried : true
}
let personStew = {
    name : "Stew",
    age : 28,
    isMarried : true
}

class Person {
    //Properties
    firstName
    lastName
    city
    graduation
    //constructor
    constructor(firstName,lastName,city,graduation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.graduation = graduation;
    }
    //methods
    datails(){
        console.log(`Details : ${this.firstName},${this.lastName},${this.city},${this.graduation}`);
    }
}
const personElon1 = new Person ('Elon','Musk','Austin','Msc Physics')
console.log(personElon1);
console.log(`Elon Details : First Name : ${personElon1.firstName},${personElon1.lastName},${personElon1.city},${personElon1.graduation},`);

const personStew1 = new person('Stew','Job','San Francisco','Dropout');
console.log(personStew1);

const personBill = new person('Bill','Gates','San Francisco','Dropout');
console.log(personBill);

const personRatan = new person('Ratan','Job','San Francisco','Dropout');
console.log(personRatan);
console.log(`=========================`);
const arrayPerson = [personElon1,personStew1,personBill,personRatan];
for (const element of arrayPerson) {
    element.details();
}
function traverseObject(objectPerson){
for (const key in object) {
   console.log();
}
}
traverseObject(personRatan)
traverseObject(personElon1)




























