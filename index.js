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

// Password 
function createPerfectPassword(C) {
  var { Name, Year } = C;

  if (typeof Name !== "string") {
    return "Invalid Input";
  }

  if (typeof Year !== "number") {
    return "Invalid Input";    
  }

  if (Year < 1000) {
  return "Invalid Input";
}
if (Year > 9999) {
  return "Invalid Input";
} 

  var first = Name[0].toUpperCase();
  var extra = Name.slice(1).toLowerCase();
  var pass = first + extra + Year;

  return pass;
}

console.log(createPerfectPassword({ Name: "salman", Year: 1990 }));
console.log(createPerfectPassword({ Name: "rahim", Year: 200 }));
console.log(createPerfectPassword({ Name: "karim", Year: 2023 }));
console.log(createPerfectPassword("Invalid Object"));



 