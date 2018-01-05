// Given a string, write a function to check if it is a permuation of a palindrome

function paplPerm(str) {
  var stringArr = str.trim().split(" ").join("").split("");
  function convertStrToObj(arr) {
      var obj = {};
      for (var i = 0; i < arr.length; i++) {
          if (Object.getOwnPropertyNames(obj).includes(arr[i])) {
              obj[arr[i]]++;
          } else {
              obj[arr[i]] = 1;
          }
      }
      return obj;
  }
  
  var obj = convertStrToObj(stringArr);
  var oddCount = 0;
  
  for (var letter in obj) {
      if (obj[letter] % 2 == 1) {
          oddCount++;
      }
  }
  
  if (oddCount > 1) {
      return false;
  }
  return true
}