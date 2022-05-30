let myScreenOrientation = window.screen.orientation;
myScreenOrientation.lock("natural");

// Question 1
let hermes = document.getElementById("team-name");
hermes.style.color = "#a65d03";

// Question 2
let hermesMembers = ["CodeGiyu", "Natacha", "DeeVeee", "Fawsiyyah", "Adedamola", "Ifechukwude", "Michael"];
console.log(hermesMembers[0]);

// Question 3
let codegiyu = {
    "First name": "Edward-Precious",
    "Last name": "Omegbu",
    "Best movie": "One Piece",
    "Best food": "Do I even have one?",
    "Complexion": "Dark",
    "Birth Month": "December",
    "State": "Anambra",
    "Group name": "Hermes"
}
console.log(codegiyu["Best movie"]);

// Question 4
let noun = "Bro";
let verb = "is";
let adjective = "great";

let sentenceOne;
let sentenceTwo;
let sentenceThree;
let sentenceFour;
let sentenceFive;

console.log(sentenceOne);
console.log(sentenceTwo);
console.log(sentenceThree);
console.log(sentenceFour);
console.log(sentenceFive);

// Question 5
function remainder (a, b) {
    return a%b;
}

//Question 6
function quadraticSolver(a, b, c) {
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    let rootOne = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a);
    let answer;

    if(rootOne === rootTwo) {
        answer = "The root of your quadratic equation is " + rootOne + ".";
    } else {
        answer = "The roots of your quadratic equation are " + rootOne + " and " + rootTwo + ".";
    }
    
    return answer;
}

console.log(quadraticSolver(2, -3, 1));

// Question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

// Question 8
function areaOfCircle(r, unit) {
    const pi = 3.142;
    let area = pi * Math.pow(r, 2);
    let answer = "The area of the circle is " + area.toFixed(2) + unit + " squared."
    return answer;
}
console.log(areaOfCircle(9, "cm"));

//Question 9
function simpleInterestCalculator(p, r, t) {
    let simpleInterest = (p * r * t) / (100 * 100);

    return simpleInterest;
}
console.log(8200, 17.5, 2.5);

// Question 10
console.log(10 % 4);

// Question 11
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
