var weekDay = function (dayNum) {
  switch (dayNum) {
    case 1:
      console.log(`Working day-Monday`);
      break;
    case 2:
      console.log(`Working day-Tuesday`);
      break;
    case 3:
      console.log(`Working day-Wednesday`);
      break;
    case 4:
      console.log(`Working day-Thursday`);
      break;
    case 5:
      console.log(`Working day-Friday`);
      break;
    case 6:
      console.log(`Working day-Saturday`);
      break;
    case 7:
      console.log(`Non working day-Sunday`);
      break;

    default:
      console.log(`Invalid data : ${dayNum}`);
      break;
  }
};
weekDay(1);
weekDay(2);
weekDay(3);
weekDay(4);
weekDay(5);
weekDay(6);
weekDay(7);
weekDay(11);
