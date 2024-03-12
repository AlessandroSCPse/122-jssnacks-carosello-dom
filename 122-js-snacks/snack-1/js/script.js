// Chiedere all'utente 5 numeri. 
// Inserire i numeri nell'array ma senza creare duplicati 
// (inserire il numero nell'array solo se non è già presente)

const numbersArray = [];
// Per 5 volte:
for(let i = 0; i < 5; i++) {
    // Chiedere un numero all'utente
    const userNumber = parseInt(prompt('Dimmi un numero'));

    // Controllo che non sia già presente nell'array e se non è presente lo pusho
    if(!numbersArray.includes(userNumber)) {
        numbersArray.push(userNumber);
    }
}

console.log(numbersArray);
