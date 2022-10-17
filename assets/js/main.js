/* Consegna:
1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata (10 x 10). 
    1.2. Ogni cella ha un numero progressivo, da 1 a 100.

2. Quando l'utente clicca su ogni cella:  
    2.1. La cella cliccata si colora di azzurro 
    2.2. Viene emesso un messaggio in console con il numero della cella cliccata.
*/

// 1. Creazione della griglia:

/* function cellGenerator () */
function cellGenerator (cellNumber, domEl){

    for(i = 1; i <= cellNumber; i++){
        domEl.innerHTML += `<div class="cell">${i}</div>`;
    }

}

const containerEl = document.querySelector('.container'); 
const cellNumber = 100;


/* 2. Aggiunta dell'event-listener al click:
    - creo il bottone nel markup
    - btn.addEventListener (click) --- si genera la griglia
    - cell.addEventlister (click) -- in console n. della cella (ciclo for)
*/

const btnEl = document.querySelector("button");

const cellEl = document.querySelector(".container > .cell")

/* Generate grid */
btnEl.addEventListener("click", function (){
    cellGenerator(cellNumber,containerEl);
})


