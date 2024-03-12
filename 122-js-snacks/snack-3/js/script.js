// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
const numbers = [];
for(let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt('Dammi un numero'));
    
    if(userNumber % 2 !== 0) {
        numbers.push(userNumber);
    }
}

console.log(numbers);