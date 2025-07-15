let empNames = ["Deepak", "Amit", "Ravi", "Neha"];
let salaries = [40000, 55000, 60000, 45000];

let empObj = Object.fromEntries(empNames.map((name, i) => [name, salaries[i]]));
let target = "Ravi";

if (empObj[target]) {
    empObj[target] *= 1.3;
}

let finalResult = Object.entries(empObj).map(([name, salary]) => ({ name, salary }));

console.log(finalResult);
