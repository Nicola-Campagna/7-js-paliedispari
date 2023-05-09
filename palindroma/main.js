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



// setting funzione che verifca se la parola è palindroma
function isPalidroma(word) {
    // parola al contrario
    let reverseWord = "";
    // ciclo per prendere la lettera corrente 
    for (let i = 0; i < userWord.length; i++) {
        const currentLetter = userWord[i];
        // console.log(currentLetter);

        reverseWord = currentLetter + reverseWord;
        console.log(reverseWord);
    }

    return reverseWord === userWord;
}
