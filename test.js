// Mark Sheet
function evaluateResult(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid Input";
  }
  let grades = [];
  for (let data of marks) {
    if (typeof data === "number") {
      if (data > 0 && data <= 100) {
        let marks = data;
        if (marks >= 80) {
          grades.push("A+");
        } else if (marks >= 70) {
          grades.push("A");
        } else if (marks >= 60) {
          grades.push("A-");
        } else if (marks >= 50) {
          grades.push("B");
        } else if (marks >= 40) {
          grades.push("C");
        } else if (marks >= 33) {
          grades.push("D");
        } else if (marks < 33) {
          grades.push("F");
        }
      }       
     else if (data < 0) {
        grades.push("Invalid Input");
      } 
     else if (data > 100) {
        grades.push("Invalid Input");
      }
    } 
  else {
      grades.push("Invalid Input");
    }
  }
  return grades;
}

console.log(evaluateResult([45, 67, 82, 95, "a", null])); 
console.log(evaluateResult([90, 80, 70, 60, 50, 40]));   
console.log(evaluateResult([30]));                     
console.log(evaluateResult([100, 110, -5]));  
