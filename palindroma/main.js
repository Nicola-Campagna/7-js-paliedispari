// parola inserita dall'utente
const userWord = prompt("INSERIRE UNA PAROLA");
console.log("parola utente: " + userWord);


// SE la parola inserita dall'utente è palindroma .....
if (isPalidroma(userWord)) {
    console.log(userWord + " è una parola PALINDROMA");
}
// ALTRIMENTI ...
else {
    console.log(userWord + " non è una parola palindroma");
}

/**
 * funzione che verifca se la parola è palindroma
 * @param {string} word parametro che contiene la parola da verificare
 * @returns {string | false} ritorna una stringa se la parola è palindroma , false se non lo è
 */


function isPalidroma(word) {
    // parola al contrario
    let reverseWord = "";
    // ciclo per prendere la lettera corrente 
    for (let i = 0; i < userWord.length; i++) {
        const currentLetter = userWord[i];
        // console.log(currentLetter);
        // aggiungo alla lettere precedente la parola successiva ma non davanti ma prima (es.. NICO --- OCIN) 
        reverseWord = currentLetter + reverseWord;
        console.log(reverseWord);
    }
    // ritorna la stringa se la parola è palindroma
    return reverseWord === userWord;
}
