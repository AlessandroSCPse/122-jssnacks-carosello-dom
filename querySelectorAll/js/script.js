const myLi = document.querySelectorAll('.list > li');
console.log(myLi);

// myLi[2].style.color = 'red';
// myLi[2].classList.add('ciao');

// Scorro tutte le li
for(let i = 0; i < myLi.length; i++) {
    // console.log(myLi[i]);
    const thisLi = myLi[i];
    console.log(thisLi);
    
    // per ogni li aggiungo la classe "blue"
    thisLi.classList.add('blue');
}
