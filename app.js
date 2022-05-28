let codegiyu = {
    "first name": "Edward-Precious",
    "last name": "Omegbu",
    "best movie": "One Piece",
}

console.log(codegiyu["best movie"]);

console.log(5%2);

function remainder (a, b) {
    return a%b;
}

console.log(remainder(8,7));

function quadraticSolver(a, b, c) {
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    let rootOne = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a);

    let answer = "The roots of your quadratic equation are " + rootOne + " and " + rootTwo + ".";

    return answer;
}

console.log(quadraticSolver(2, -3, 1));


function areaOfCircle(r, unit) {
    const pi = 3.142;
    let area = pi * Math.pow(r, 2);
    let answer = "The area of the circle is " + area.toFixed(2) + unit + " squared."
    return answer;
}

console.log(areaOfCircle(9, "cm"));


function bmiCalculator(mass, height) {
    let bmi = mass / Math.pow(height, 2);
    return bmi;
}

function compareBmi(testData) {
    let mass1 = Object.values(testData)[0][0];
    let mass2 = Object.values(testData)[1][0];
    let height1 = Object.values(testData)[0][1];
    let height2 = Object.values(testData)[1][1];

    let bmi1 = bmiCalculator(mass1, height1);
    let bmi2 = bmiCalculator(mass2, height2);

    let meritHigherBMI = bmi1 > bmi2;

    let result = Object.values(testData)[0][2] + "'s BMI is " + bmi1.toFixed(2) + " and " + Object.values(testData)[1][2] + 
    "'s BMI is " + bmi2.toFixed(2) + ". Therefore " + Object.values(testData)[0][2] + " having a higher BMI is " + meritHigherBMI + "."

    return result;
}

let testData1 = {
    Merit: [78, 1.69, "Merit"],
    Nutjob: [92, 1.95, "Nutjob"]
}

let testData2 = {
    Merit: [85, 1.76, "Merit"],
    Nutjob: [95, 1.88, "Nutjob"]
}

console.log(compareBmi(testData1));
console.log(compareBmi(testData2));
