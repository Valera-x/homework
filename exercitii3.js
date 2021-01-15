// Nu modificați  numele funcțiilor

const getBiggest = (x, y) => {
    // x și y sunt numere întregi. Returnează numărul întreg mai mare
    // dacă sunt aceleași returnează fie unul
    return Math.max(x,y)
    }
console.log(getBiggest(3,5));

const greeting = (language) => {
// returnează o felicitare pentru trei limbi diferite:    // language: 'German' -> 'Guten Tag!'
    // limba: 'Spanish' -> 'Hola!'
    // limba: 'Chinese' -> 'Ni Hao!'
    // dacă limba este nedefinită, return 'Hello!'
    if (language === 'German'){
        return "Guten Tag!"
    }else if (language === 'Spanish'){
        return 'Hola!'
    }else if (language === 'Chinese'){
        return 'Ni Hao!'
    }else {
        return 'Hello!'
    }
}
console.log(greeting('Germ'));

const isTenOrFive = (num) => {
    // returnează true dacă num este 10 sau 5
    if (num === 5 ){
        return true
    }else if ( num === 10){
        return true
    }else {
        return false
    }
}
console.log(isTenOrFive(6));

const isInRange = (num) => {
    // returnează adevărat dacă num este mai mic de 50 și mai mare de 20
    if (num <50 && num > 20){
        return true
    }else {
        return false
    }
}
console.log(isInRange(19));

const isInteger = (num) => {
    // returnează adevărat dacă num este un număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest lucru folosind Math.floor
    return (num ^ 0) === num;
    }
console.log(isInteger(4.5));

const fizzBuzz = (num) => {
    // returnează adevărat dacă num este un număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest lucru folosind Math.floor
};

const isPrime = (num) => {
    // returnează adevărat dacă num este prim.
    // altfel returnează false
    // sugestie: un număr prim este doar divizibil în mod egal prin el însuși și 1
    // sugestie2: puteți rezolva acest lucru folosind un ciclu for
    // notă: 0 și 1 NU sunt considerate numere prime
        if (num < 2) return false;
        for (let i = num -1; i > 1; i--) {
            if (num % i === 0) {
                return false;
            }
        }
        return true
    }
console.log(isPrime(1));


let one = ['primu', 'doi', 'trei', 'patru', 'cinci'];
const returnFirst = (arr) => {
    // returnează primul element din array
     let [first] = one
    return first
}
console.log(returnFirst());


let end = ['unu', 'doi', 'trei', 'patru'];
const returnLast = (arr) => {
    // returnează ultimul element din array
    let [last] = end.slice(-1);
    return last
}
console.log(returnLast());


let fruits = ['banana', 'apple', 'orange', 'lime']
const getArrayLength = (arr) => {
    // returnează lungimea din array
    return fruits.length
}
console.log(getArrayLength());


let arr = [10, 20, 30, 40, 50, 60, 70]
const incrementByOne = (arr, n) => {
    // arr este un array de numere întregi
    // măriți fiecare număr întreg cu unu
    // returnează array-ul
    let a = [];
    n = n || 1;
    for ( i = 0; i < arr.length; i++) {
      a[i] = arr[i] + n
    }
    return a
}
console.log(incrementByOne(arr));


let auto =  ['Audi', 'Mers', 'Bmw'];
const addItemToArray = (arr, item) => {
//     // adăugați elementul la sfârșitul array-ului
//     // returnează matrice
    arr.push(item)
    return arr
}
console.log(addItemToArray(auto,'ferrari'));


let money = ['euro', 'dolar', 'rubla']
const addItemToFront = (arr, item ) => {
    // adăugați elementul în partea din față a array-ului
    // returnează array-ului
    // sugestie: utilizați metoda array .unshift
    arr.unshift(item)
    return arr
}
console.log(addItemToFront(money, 'Bitcoin'))


let wd = ['Fata', 'are', 'doua', 'jucarii!']
const wordsToSentence = (words) => {
    // words este un array de string-uri
    // returnează un string care conține toate cuvintele concatenate împreună
    // spațiile trebuie să fie între fiecare cuvânt
    // exemplu: ['Hello', 'world!'] -> 'Hello world!'
      words = wd.join(' ')
    return words
    }
console.log(wordsToSentence());



 arr = ['banana', 'orange', 'kiwi', 'apple']
const contains = (arr, item) => {
    // verificați dacă item se află în interiorul arr
    // returnează true dacă este,
    // în caz contrar returnează false
    // arr = ['banana', 'orange', 'kiwi', 'apple'];
    // item = ['banana'];
    if (arr.includes(item) ){
        return true
    }else {
        return false
    }
}

console.log(contains(arr,'b'))




let numere = [212, 32, 43, 545, 656]
const addNumbers = (numbers) => {
    // numbers este un array de numere întregi.
    // aduna toate numerele întregi și returnează valoarea
    let sum = 0;
    for (let i = 0; i <numbers.length ; i++) {
        sum += numbers[i]
    }
    return sum
    }
console.log(addNumbers(numere));



let cifreM = [23, 44, 77, 42, 99, 65, 48]
const averageTestScore = (testScores) => {
    // testScores este un array. mergi prin  testScores, calculează media.
    // returnează media
    let sum = 0;
    for (let i = 0; i <testScores.length ; i++) {
        sum += testScores[i] / testScores.length;
    }
    return sum
}
console.log(averageTestScore(cifreM));


let numbS = [23, 545, 434, 768, 122, 356]
const largestNumber = (numbers) => {
    // numbers este un array de numere întregi
    // returnează cel mai mare număr întreg
     return Math.max.apply(null, numbers)
}
console.log(largestNumber(numbS))








