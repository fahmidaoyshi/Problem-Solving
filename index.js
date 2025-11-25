// Function to fix the weight machine readings
function fixWeightMachine(A) {
  if (!Array.isArray(A)) {
    return "Invalid Input";
  }
  let result = [];
  for (let data of A) {
    if (typeof data === "number") {
      if (data > 0) {
        result.push(data);
      }
    }
  }
  return result;
}
console.log(fixWeightMachine([50, -10, 0, 75, "a", null]));       
console.log(fixWeightMachine("Not an Array"));                    
console.log(fixWeightMachine([100, NaN, -5, 30, undefined]));     
console.log(fixWeightMachine([]));                               

// Check Vowels
function countVowels(B) {
  var t = typeof B;
  if (t !== "string") {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (let data of B) {
      if (typeof data !== "string") {
        return "Invalid Input";
      }
      for (let t of data) {
        var check = vowels.includes(t);
        if (check === true) {
          count++;
        } else {
          count = count;
        }
      }
    }
  } else {
    return "Invalid Input";
  }
  return count;
}

console.log(countVowels(["hello"]));
console.log(countVowels(["Bangladesh"]));
console.log(countVowels([12345]));      
console.log(countVowels(["rhythm"]));