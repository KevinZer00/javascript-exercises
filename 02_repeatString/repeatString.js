const repeatString = function(string, num) {
  var returnString = " ";
  for (i = 0; i < num; i++)
  {
    returnString = returnString += string;
  }
  return returnString;
}

// Do not edit below this line
module.exports = repeatString;
