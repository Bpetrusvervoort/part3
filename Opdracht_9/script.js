//function declaration=

function doubleSquared(number1, number2){
    const total = (number1 + number1) + (number2 + number2);
    const double = total * 2;
    return double;
}
const result = doubleSquared(4,8);
console.log(result);

//function expression=
const doubleSquared2 = function(number1, number2){
    const total = (number1 + number1) + (number2 + number2);
    const double = total * 2;
    return double;
}
const result2 = doubleSquared(4,8);
console.log(result2);

//Arrow function=
const doubleSquared3 = (number1, number2) => {
    const total = (number1 + number1) + (number2 + number2);
    const double = total * 2;
    return double;
}

const result3 = doubleSquared(4,8);
console.log(result3);