console.log("=======Function with no argument and no return=======");
function Trial() {
  console.log("I am learning javascript");
}
Trial();
function Goal() {
  console.log("My goal is to become successful front end developer");
}
Goal();

console.log("=====================step 2========================");
function personalDetails(firstName, lastName, collegeName) {
  console.log("My first name is:", firstName);
  console.log("My last name is:", lastName);
  console.log("My college name is:", collegeName);
}
personalDetails("Neha", "Sonar", "Government college of Engineering,Jalgaon.");
console.log("====================step 3===========================");
function swapValues(value1, value2) {
  console.log("Before swap-->", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swap-->", value1, value2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("=================step 4===============");
function addThreeValues(arg1, arg2, arg3) {
  console.log("Addition of three values:", arg1 + arg2 + arg3);
}
addThreeValues(10.43, 600, 40);
addThreeValues("Hello", "Good", "Morning");
