function stringHandsOn() {
  var str = "   Hey you are doing good, keep it up    ";
  console.log(`1.Given string is:"${str}"`);
  var lengthBeforeTrim = str.length;
  console.log(`2.Length of the string before trim is:${lengthBeforeTrim}`);
  var newStr = str.trim();
  var lengthAfterTrim = newStr.length;
  var result = str.trim();
  console.log(
    `3.String after trim:${newStr},Length of the string after trim:`,
    lengthAfterTrim
  );

  var result = lengthBeforeTrim - lengthAfterTrim;
  console.log("4.Removed extra spaces in step 3 are:", result);
  var result1 = newStr.charAt(0);

  var result2 = newStr.charAt(lengthAfterTrim - 1);
  console.log(
    `5.First character after trim is:${result1},  Last character after trim is:${result2}`
  );
  var words = newStr.split(" ");
  //console.log(words);
  console.log(`6.Total words available in the string is:${words.length}`);
  var indexofgood = newStr.indexOf("good");
  console.log(`7.Index of good is:${indexofgood}`);

  var result = newStr.slice(22);
  console.log(`8.Substring starting from index 22 is:${result}`);
  var result = newStr.endsWith(`up`);
  console.log(`9.Is string ends with word "Hey":${result}`);
  var result = newStr.startsWith(`Hey`);
  console.log(`10.Is string starts with word "Hey":${result}`);
}
stringHandsOn();
