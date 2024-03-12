// Dato un array contenente 10 numeri, stampare in console il numero più grande.
const numbers = [43, 8, 98, 250, 6, 76, 122, 1, 34, 88];

let biggestNumber = numbers[0];
// Scorro tutti i numeri dell'array
for(let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i];

    // Per ogni numero
    // se il thisNumber è maggiore di quello che ho in memoria come più grande
    // allora thisNumber diventa il più grande che ho in memoria
    if(thisNumber > biggestNumber) {
        biggestNumber = thisNumber;
    }
}

console.log(biggestNumber);
