/******************************

  DICHIARAZIONI VARIABILI DOM

 ******************************/

// numeri pari
const numeriPariEl = document.getElementById("numeri-pari");
// numeri pari
const numeriDispariEl = document.getElementById("numeri-dispari");


/******************************

  ON LOAD

 ******************************/

// array vuoto da riempire ...
const myArray = [];

// variabile apppoggio con funzione n elementi dell'array
const numberElementArray = generateNumberElementArray();

// ciclo per aggiungere i numeri generati random all'array
for (let i = 0; i < numberElementArray; i++) {
    // genera numeri random tra 1 e 100 
    const randomNumberArray = randomNumbers();
    // aggiungiamo i numeri nell'array
    myArray.push(randomNumberArray);
}

console.log(myArray);

// PARI O DISPARI

// cicla i numeri dell'array e dire se sono pari o dispari
for (let i = 0; i < myArray.length; i++) {
    const currentNumber = myArray[i];
    // SE è pari il numero corrente ...
    if (isEven(currentNumber)) {
        console.log("numero pari: " + currentNumber);
        numeriPariEl.style = "color:green"
        numeriPariEl.innerHTML += currentNumber + " ";
    }
    // ALTRIEMENTI il numero è dispari
    else {
        console.log("numero dispari: " + currentNumber);
        numeriDispariEl.style = "color:red"
        numeriDispariEl.innerHTML += currentNumber + " ";
    }
}





/****************** 
     FUNZIONI
*******************/

// setting funzione che genera il numero degli elementi di un array tra 1 e 10
function generateNumberElementArray() {
    // n random tra 1 e 10
    const randomElementsNumber = Math.floor(Math.random() * 10 + 1);
    return randomElementsNumber;
}

// setting funzione che genera i numeri  tra 1 e 100
function randomNumbers() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    return randomNumber;
}

// setting funzione pari/dispari
function isEven(num) {
    return num % 2 == 0;
}