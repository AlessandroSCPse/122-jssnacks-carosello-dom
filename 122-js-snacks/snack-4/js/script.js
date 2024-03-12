// Calcola la somma e la media dei primi 10 numeri.
const numberOfItems = parseInt(prompt('Dimmi un numero'));

let sum = 0;
// Ottenere i numeri da 1 a 10
for(let i = 1; i <= numberOfItems; i++) {
    // Per ogni numero lo sommo alla somma precedente
    // console.log(i);
    sum += i;
}

console.log('somma', sum);

// Ora che ho la somma calcolo la media (somma / numero di elementi)
const average = sum / numberOfItems;

console.log('media', average);