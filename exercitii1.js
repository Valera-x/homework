
/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercitiu 1: Încălzire! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/


/*
Când efectuați aceste sarcini, vă recomandăm să
 utilizați console.log pentru a testa
 codul dvs. pentru a vă asigura că funcționează corect.*/

/*
Sarcina 1a - Vârsta votului
Urmează următoarea instrucțiune:
    1. Creați o variabilă numită voteAge și
    atribuiți-i o valoare
    2. In consola va aparea true  dacă vârsta
    este de 18 ani sau mai mare
    SUGESTIE: nu este necesară nicio funcție
*/
const voteAge = 17;
if (voteAge >= 18){
    console.log(true)
}else{
    console.log(false)
}

/*
Sarcina 1b - Valori
Urmează următoarele instrucțiuni:
    1. Declarați două variabile și
     atribuiți-le valori
    2. Folosiți o conditie pentru a modifica
    valoarea primei variabile pe baza
     valorii atribuite celei de-a doua variabila
    3. In consola va aparea  valoarea  primei variabile
    SUGESTIE: nu este necesară nicio funcție
*/
let var1 = 5;
let var2 = 10;

if (var2===10){
    var1 = 5
}
console.log(var1)

/*
Sarcina 1c - Convert Strings to Numbers
Urmează următoarele instrucțiuni:
    1. Declarați o variabilă de tip
    string cu valoarea „1999”
    2. Convertiți valoarea stringului „1999”
    într-o valoare întreagă din 1999
    3. In consola va aparea rezultatul
    SUGESTIE: căutați metoda Number
*/

let string = '1999';
let numb = Number(string);
console.log(numb);


/*
Sarcina 1d - Înmulțirea

Urmează următoarele instrucțiuni:
    1. Creati funcția multiply de mai jos și transmiteți-i două numere
    2. Primiți numerele din parametrii: a și b
    3. Înmulțiți a și b și returnați rezultatul
*/

function multiply(a, b){
    return a*b
}
console.log(multiply(4, 11));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Vârsta în DogYears
/*
Urmează următoarele instrucțiuni:
    1. Invocați funcția dogYears de mai jos și transmiteți un parametru vârstă
    2. Folosiți valoarea primită pentru a calcula vârsta unui câine in ani (1 an uman este egal cu 7 ani la câini )
    3. Returnează vârsta  calculată
*/

function dogYears(virsta){
    return 7 * virsta
}

console.log(dogYears(13))

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Alimentator pentru câini - În funcție de
// greutatea și vârsta lor, trebuie să știm
// câte kilograme de alimente să ne
// hrănească câinele în fiecare zi!
// / *
// Utilizați funcția hungryDog și cerințele de hrănire de mai jos pentru a face următoarele:
//   1. Creati funcția hungryDog de mai jos și dați-i un parametru a greutății în kilograme
//   2. De asemenea, treceți la hungryDog un parametru de vârstă în ani (notă: dacă câinele este un cățeluș, vârsta va fi zecimală. De exemplu: trei luni = 3/12 sau .25)
//   3. Faceți calculele corespunzătoare și returnați numărul de kilograme de hrană crudă pentru a hrăni câinele / cățelușul într-o zi
//
//   REȚINEȚI: Acest program ar trebui să gestioneze corect vârstele și greutățile adulților ȘI cățelușilor
//
//   Cerințe de hrănire:
//   Câini adulți mai mare de un an are 5 lbs(Pounds) - 5% din greutatea lor corporală
//      6 - 10 lbs(Pounds) - 4% din greutatea lor corporală
//      11 - 15 lbs(Pounds) - 3% din greutatea lor corporală
//      > 15lbs(Pounds) - 2% din greutatea corporală
//   Puii sub 1 an
//      2 - 4 luni 10% din greutatea corporală
//      4 - 7 luni 5% din greutatea corporală
//      7 - 12 luni 4% din greutatea corporală
//
//   NOTĂ: Dacă se face corect, o greutate de 15 lbs și vârsta de 1 an ar reveni 0,44999999999999996*/

function hungryDog(lbs, age){
   if(lbs === 5 || age === 1 ){
       return lbs * 5 / 100;
   }else if (lbs >5 && lbs < 11 || age === 1 ){
       return lbs * 4 / 100
   }else if (lbs > 10 && lbs < 16 || age === 1){
       return lbs * 3 / 100
   }else if (lbs > 16 || age === 1 ){
       return lbs * 2 / 100
   }else if (age >= 2/12 && age <= 4/12 && lbs > 5  ){
       return (lbs * 10 / 100 )
   } else if (age > 4 && age <= 7/12 && lbs > 5 ){
       return (lbs * 5 / 100)
   }else if (age > 7 && age <= 12 && lbs > 5 ){
       return (lbs * 4 / 100)
   }
}

console.log(hungryDog(4, 5/12))
//------

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Piatra, hârtie, foarfeca - Să ne jucăm împotriva
// computerului!
// / *
// Creați o variabilă globală care generează aleatoriu
// alegerea computerului
// Utilizați Math.random pentru a determina alegerea
// computerului (Math.random dă un număr aleatoriu
// între 0 și 1)
// SUGESTIE: Deși puteți completa acest lucru doar cu
// condițiile bazate pe string, vă poate ajuta să
// comparați alegerea cu un număr atunci când utilizați
// Math.random ()
// Utilizați funcția de joc de mai jos pentru a face
// următoarele:
//    1. Primiți 2 parametri alegerea utilizatorului și
//    alegerea computerului
//    2. Returnati dacă utilizatorul a câștigat, a pierdut
//    sau a egalat pe baza acestor reguli de joc descrise
//    mai jos - String-urile returnate trebuie să se
//    potrivească exact cu șirurile de mai jos.
//     - câștiga ar trebui să întoarcă "câștigi!"
//     - pierde ar trebui să întoarcă "pierzi!"
//     - Egal ar trebui să returneze "este egalitate"
//
//    REGULI JOCULUI: foarfeca bate hârtia |
//    Hârtia bate Piatra | Piatra bate foarfeca | Sau există o egalitate
//
//    SUGESTIE: Amintiți-vă că ordinea în care trecem
//    în argumentele noastre contează atunci când vine
//    vorba de parametri*/

let joc = ['piatra', 'foarfece', 'hirtie'];
let raspuns  = Math.round(Math.random(joc)*3);
let aleator = joc[raspuns]

const utilizator = prompt('Alegeti un element : piatra, foarfece, hirtie');
function game(user, computer){
    joc [0] > joc [1] && joc [0] < joc [2];
    joc [1] > joc [2] && joc [1] < joc [0];
    joc [2] > joc [0] && joc [2] < joc [1];

   if (user === aleator){
       alert('egal!')
   }else if (user > aleator ){
       alert ('ai cistigat!')
   }else if(user < aleator){
       alert('ai pierdut!')
   }
  console.log(raspuns);
    console.log(computer);
}
game(utilizator, raspuns)



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Convertor Km
// // Sarcina 5a - KM in mile
// / *
// Folosind funcția miles de mai jos, faceți următoarele:
//    1. Primeste un numar de kilometri
//    2. Convertiți numărul de kiolmetre primite în mile
//    3. Returnati numărul de mile*/

function miles(km){
     return   km * 0.621371;
}
console.log(miles(100))


//Sarcina 5b - Picioare in CM
// / *
// Folosind funcția feet de mai jos faceți următoarele:
//    1. Primeste un numar de cm
//    2. Convertiți numărul de cm în picioare
//    3. Întoarceți numărul de picioare*/

function feet(cm){

    return cm/30.48
}

console.log(feet(40))


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Calculator de note
// / *
// Folosind funcția de grade de mai jos faceți următoarele:
//    1. Primește un scor din 100
//    2. Returnați nota corespunzătoare literei urmând
//    această scală de note:
//     90-100 ar trebui să returneze „ai un A”
//     80-89 ar trebui să returneze „ai un B”
//     70-79 ar trebui să returneze „ai un C”
//     60-69 ar trebui să returneze „ai un D”
//     mai jos ar trebui să returneze „ai un F”*/

function grade(number){
    if (number >89 && number < 101){
        console.log("ai un A")
    }
    else if(number >79 && number < 90) {
        console.log('ai un B')
    }
    else if (number > 69 && number < 80){
        console.log('ai un C')
    }
    else if (number > 59 && number < 70){
        console.log('ai un D')
    }
    else if (number < 60){
        console.log('ai un F')
    }else if (number > 101){
        console.log("Nu exista asa ceva")
    }else {
        console.log("Ai gresit , Mai incearca")
    }
}
console.log(grade(45))


/*💪💪💪💪💪💪💪💪💪💪 Puternic 💪💪💪💪💪💪💪💪💪💪*/

//Contor vocal - Câte vocale există?
// / *
// Folosind funcția VowelCounter de mai jos, faceți
// următoarele:
//    1. Primiți un string ca parametru
//    2. Numărați și returnați numărul de vocale din
//    stringul respectiv.
//    Ar trebui să se ia atât  vocale cu majuscule, cât
//    și de vocale minuscule.
//    SUGESTIE - poate fi necesar să studiați Array
//    SUGESTIE - încercați să căutați metoda .includes ()*/


function vowelCounter(word) {
    // let x = []
    // let regex = /[aeiou]/
    return (word.match(/[aeiou]/ig)||[]);


}

console.log(vowelCounter('WErUioKlaxAu'))