// Nu modificați nimic din numele
// funcțiilor

const multiplyByTen = (num) => {
    // returnează num după ce îl înmulțești cu zece
    return num * 10
}
console.log(multiplyByTen(5));

const subtractFive = (num) => {
    // returnează num după scăderea cu cinci
    return num - 5
}
console.log(subtractFive(88));

const areSameLength = (str1, str2) => {
    // returnează true dacă cele două string-uri au aceeași lungime
    // altfel returnează false
    if (str1.length === str2.length){
        return true
    }else {
        return false
    }
}
console.log(areSameLength('qwer', 'asdf'));

const areEqual = (x, y) => {
    // returnează adevărat dacă x și y sunt egale
    // altfel returnează false
    if (x === y){
        return true
    }else {
        return false
    }
}
console.log(areEqual(3, 7));

const lessThanNinety = (num) => {
    // returnează adevărat dacă num este mai mic de nouăzeci
    // altfel returnează false
    if (num < 90){
        return true
    }else {
        return false
    }
}
console.log(lessThanNinety(77));

const greaterThanFifty = (num) => {
    // returnează true dacă num este mai mare de cincizeci
    // altfel returnează false
    if (num > 50){
        return true
    }else {
        return false
    }
}
console.log(greaterThanFifty(44));

const add = (x, y) => {
    // adăugați x și y împreună și returnați valoarea
    return x + y
}
console.log(add(4, 8));


const subtract = (x, y) => {
    // scade y din x și returnează valoarea
    return y - x
}
console.log(subtract(77, 99));

const divide = (x, y) => {
    // împarte x cu y și returnează valoarea
    return x / y
}
console.log(divide(100, 50));

const multiply = (x, y) => {
    // înmulțiți x cu y și returnați valoarea
    return x * y
}
console.log(multiply(3, 8));

const getRemainder = (x, y) => {
    // returnează restul de la împărțirea x la y
    return x / y
}
console.log(getRemainder(81, 9));

const isEven = (num) => {
    // returnează true dacă num este par
    // altfel returnează false
    if (num % 2 === 0 ) {
        return true
    } else {
        return false
    }
}
console.log(isEven(885));

const isOdd = (num) => {
    // return true if num is odd
    // otherwise return false
    if (num % 3 === 0){
        return true
    }else {
        return false
    }
}
console.log(isOdd(999));

const square = (num) => {
    // num la pătrat și returnează noua valoare
    return Math.pow(num,2)
}
console.log(square(4))


const cube = (num) => {
    // num la cub și returnează noua valoare
    return Math.pow(num, 3)
}
console.log(cube(3));

const raiseToPower = (num, exponent) => {
    // ridicați numărul la orice putere este trecută ca exponent
    return Math.pow(num, exponent)
}
console.log(raiseToPower(3, 4));

const roundNumber = (num) => {
    // rotunjește num și returnează-l
    return Math.round(num)
}
console.log(roundNumber(3.7));

const roundUp = (num) => {
    // rotunjește numărul in sus și returnează-l
    return Math.ceil(num)
}
console.log(roundUp(3.1));

const addExclamationPoint = (str) => {
    // adaugă un semn de exclamare la sfârșitul str și returnează noul string
    // 'hello world' -> 'hello world!'
    return str+'!'
}
console.log(addExclamationPoint('hello world'));

const combineNames = (firstName, lastName) => {
// returnează firstName și lastName combinate ca un șir și separate printr-un spațiu.
// 'Scoala', 'LearnIt' -> 'Scoala LearnIt'
    return `${firstName} ${lastName}`
}
console.log(combineNames('Scoala', 'LearnIt'));

const getGreeting = (name) => {
    // Luați string-ul  name și concatenați alte string-uri pe el, astfel încât să ia următoarea formă:
    // 'Sam' -> 'Salut Sam!'
    return `Salut ${name}`
}
console.log(getGreeting('Sam'));


const getRectangleArea = (length, width) => {
    // returnează aria dreptunghiului folosind length si width
    return length*width
}
console.log(getRectangleArea(8, 6));

const getTriangleArea = (base, height) => {
    // returnează aria triunghiului folosind base și base
     return (base*height)/2
}
console.log(getTriangleArea(6, 8));

const getCircleArea = (radius) => {
    // returnează zona rotunjită a cercului dată de radius
    return Math.asin(radius);
}
console.log(getCircleArea(1));

const getRectangularPrismVolume = (length, width, height) => {
    // returnează volumul prismei dreptunghiului 3D, având în vedere length, width și height
    let ariaP = width * height;
    return length * ariaP
}
console.log(getRectangularPrismVolume(5,8,9));
