/* Consegna:
1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata (10 x 10). 
    1.2. Ogni cella ha un numero progressivo, da 1 a 100.

2. Quando l'utente clicca su ogni cella:  
    2.1. La cella cliccata si colora di azzurro 
    2.2. Viene emesso un messaggio in console con il numero della cella cliccata.
*/

/* function cellGenerator () */
function cellGenerator (cellNumber, domEl){
    for(i = 1; i <= cellNumber; i++){
        domEl.innerHTML += `<div class="cell">${i}</div>`;
    }
}

/* Generate grid */

const btnEl = document.querySelector("button"); // button selector

btnEl.addEventListener("click", function (){

    const containerEl = document.querySelector('.container'); 
    const cellNumber = 100;
    cellGenerator(cellNumber,containerEl);

    const cellList = document.querySelectorAll(".cell")

    for(let i = 0; i < cellList.length; i++){
       const thisCell = cellList[i];
        // change cells color
       thisCell.addEventListener("click", function(){
            thisCell.classList.add("light_blue");
            console.log(i);
       })

    }
})

