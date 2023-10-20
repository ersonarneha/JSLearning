class Vehicle {
  name;
  colour;
  wheels;
  velocity;
  engine;
  constructor(name, colour, wheels, velocity, engine) {
    this.name = name;
    this.colour = colour;
    this.wheels = wheels;
    this.velocity = velocity;
    this.engine = engine;
  }
  details() {
    console.log(
      this.name,
      this.colour,
      this.wheels,
      this.velocity,
      this.engine
    );
  }
}
let v1 = new Vehicle("Activa 6G", "purple", 2, "45kmph", "109.5CC");
let v2 = new Vehicle("Baleno", "grey", 4, "70kmph", "1197CC");
let v3 = new Vehicle("Creta", "white", 4, "60kmph", "1497CC");
let v4 = new Vehicle("Jaguar", "brown", 4, "65kmph", "4999CC");
let v5 = new Vehicle("Pulsar", "black", 2, "50kmph", "124CC");
console.log(`========== Traversing array of vehicles ================`);
let arrayOfVehivles = [v1, v2, v3, v4, v5];
for (const element of arrayOfVehivles) {
  console.log(element);
}
console.log(`============ class college ==============`);
class College {
  collegeName;
  city;
  establishYear;
  university;
  constructor(collegeName, city, establishYear, university) {
    this.collegeName = collegeName;
    this.city = city;
    this.establishYear = establishYear;
    this.university = university;
  }
  display() {
    console.log(
      "College -" + this.collegeName + "|",
      "City-" + this.city + "|",
      "EstablishYear-" + this.establishYear + "|",
      "University-" + this.university + "|"
    );
  }
}

let c1 = new College(
  "Government College Of Engineering",
  "Jalgaon",
  "1996",
  "NMU"
);
c1.display();
let c2 = new College("College of Engineering Pune", "Pune ", "1854", "Pune");
c2.display();
let c3 = new College(
  "Visvesvaraya National Institute of Technology",
  "Nagpur ",
  "1960",
  "Mumbai"
);
c3.display();
let c4 = new College(
  "Sinhagad College of Engineering",
  "Pune ",
  "1996",
  "Pune"
);
c4.display();
console.log(`================ Traversing object=====`);
function traverseObject(objectdata) {
  for (const key in objectdata) {
    var element = objectdata[key];
    console.log(`${key},${element}`);
  }
}

traverseObject(c1);
console.log(`-------------`);
traverseObject(c2);
console.log(`----------`);
traverseObject(c3);
console.log(`-------------`);
traverseObject(c4);
