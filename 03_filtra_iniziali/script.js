/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

//funzione tradizionale 
function filtraPerLettera(nomi, lettera) {
    const risultato = [];
    for (let i = 0; i < nomi.length; i++) {
        if (nomi[i][0].toLowerCase() === lettera.toLowerCase()) {
            risultato.push(nomi[i]);
        }
    }
    return risultato;
}

// funzione con arrow 
const filtraPerLetteraArrow = (nomi, lettera) => {
    const risultato = [];
    for (let i = 0; i < nomi.length; i++) {
        if (nomi[i][0].toLowerCase() === lettera.toLowerCase()) {
            risultato.push(nomi[i]);
        }
    }
    return risultato;
}

const letteraDaCercare = "A";

// Invoca la funzione qui e stampa il risultato in console

// funzione tradizionale
console.log("Funzione tradizionale", filtraPerLettera(names, letteraDaCercare));

//funzione arrow
console.log("Arrow function:", filtraPerLetteraArrow(names, letteraDaCercare));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]