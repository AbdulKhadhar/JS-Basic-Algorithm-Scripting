function repeatStringNumTimes(str, num) {
  var newString="";
  if(num>0) {
    do {
      newString += str;
      num--;
    }
    while(num>0)
  }
  return newString;
}

repeatStringNumTimes("abc", 3);
