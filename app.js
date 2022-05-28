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
    let square = "2";
    let answer = "The area of the circle is " + area + unit + square.sup() + "."
    return answer;
}

console.log(areaOfCircle(9, "cm"));