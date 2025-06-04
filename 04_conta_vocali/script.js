/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

//funzione tradizionale
function contaVocali(word) {
    const vocali = 'aeiou';
    let conto = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (vocali.includes(word[i])) {
            conto++;
        }
    }
    return conto;
}
// funzione arrow
const contaVocaliArrow = (word) => {
    const vocali = 'aeiou';
    let conto = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (vocali.includes(word[i].toLowerCase())) {
            conto++;
        }
    }
    return conto;
}

// Invoca la funzione qui e stampa il risultato in console

// funzione tradizionale
console.log("Funzione tradizionale", contaVocali(word));

//funzione arrow
console.log("Arrow function", contaVocaliArrow(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)