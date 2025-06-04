/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// versione con function tradizionale
function saluta(nome) {
    return `Ciao ${nome}`;
}

//versione con arrow
const salutaArrow= nome => `Ciao ${nome}`;


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario': // ciao Mario
