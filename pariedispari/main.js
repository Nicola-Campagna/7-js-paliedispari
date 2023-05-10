// utente sceglie pari o dispari
const userChoice = prompt("PARI O DISPARI ?").toUpperCase();
console.log(userChoice);

// utente sceglie un n tra 1 e 5
const userNumber = parseInt(prompt("INSERISCI UN NUMERO TRA 1 E 5"));
console.log(userNumber + " :numero user");

// numero assegnato al pc
const pcNumber = generateRandomNumberOneToFive();
console.log(pcNumber + " :numero pc");

// somma tra numero utente e numero pc
const somma = parseInt(pcNumber + userNumber);
console.log(somma + " :somma");


// SE somma è un numero E la scelta dell'utente è una stringa E non una diverso da pari o dispari ...
if (
    !isNaN(somma) &&
    somma <= 10 &&
    String(userChoice) &&
    userChoice === "PARI" || userChoice === "DISPARI" && !isNaN(somma) &&
    somma <= 10 &&
    String(userChoice)
) {
    console.log("valori inseriti correttamente");

    // SE il n della somma è PARI e la scelta dell'utente è PARI -- VINCE UTENTE
    if (isEven(somma) && userChoice === "PARI") {
        console.log("HA VINTO UTENTE " + somma);
    }
    // ALTRIMENTI SE la somma è DISPARI e la scelta dell'utente è DISPARI --  VINCE UTENTE
    else if (!isEven(somma) && userChoice === "DISPARI") {
        console.log("HA VINTO UTENTE " + somma);
    }
    // ALTRIMENTI -- VINCE PC
    else {
        console.log("HA VINTO IL PC " + somma);
    }

}
// ALTRIEMNTI ...
else {
    console.error("GIOCO INTERROTTO \n valori inseriti non corretti");
}

/*****************************************
 *             FUNCTIONS
 *****************************************/

/**
 * funzione che genera un n random tra 1 e 5
 * @returns {int} ritorna un numero generato random
 */

function generateRandomNumberOneToFive() {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}

/**
 * funziona per verificare se un n è pari o dispari
 * @param {int} num numero da verificare
 * @returns {boolean} true se il numero è pari , false se non lo è
 */

function isEven(num) {
    num = parseInt(num);
    // ritorna se il numero è pari
    return num % 2 == 0;
}