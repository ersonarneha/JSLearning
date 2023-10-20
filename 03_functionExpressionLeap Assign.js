var leapYear = function (year){
  if (year===null || year===undefined || isNaN(year) || typeof(year)=="string"){
    console.log(`Given ${year} -Invalid data`);
} else {
 if (year%4==0) {
    console.log(`Given year ${year} is leap year`);
 } else {
   console.log(`Given year ${year} is not leap year`);
  }
   
}
  }
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
















