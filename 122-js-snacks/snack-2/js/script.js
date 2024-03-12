// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let userSum = 0;
// Per 5 volte:
for(let i = 0; i < 5; i++) {
    // Chiedere un numero all'utente
    const userNumber = parseInt(prompt('Dimmi un numero'));
    console.log(userNumber);
    // sommarlo alla somma che avevo in precedenza
    userSum += userNumber;
}

console.log(userSum);



