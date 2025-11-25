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
