function stringTemplateAssign() {
  var Company = "TCS";
  console.log(`My dream company is :"${Company}"`);
  var myHobby1 = "Cooking";
  var myHobby2 = "Reading";
  var myHobby3 = "Dancing";
  console.log(`My Hobbies are:'${myHobby1}','${myHobby2}','${myHobby3}'`);
  var addHobbies = myHobby1 + myHobby2 + myHobby3;
  console.log(`concatenation of hobbies using string template:${addHobbies}`);
}
stringTemplateAssign();
