/* Consegna:
1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata (10 x 10). 
    1.2. Ogni cella ha un numero progressivo, da 1 a 100.

2. Quando l'utente clicca su ogni cella:  
    2.1. La cella cliccata si colora di azzurro 
    2.2. Viene emesso un messaggio in console con il numero della cella cliccata.
*/

/* Generate grid */
function cellGenerator (cellNumber, domEl){
    for(i = 1; i <= cellNumber; i++){
        domEl.innerHTML += `<div class="cell">${i}</div>`;
    }
}

/* Generate grid */

const btnEl = document.querySelector("button"); // button selector

btnEl.addEventListener("click", function (){

    const options = document.querySelectorAll("option");

    const containerEl = document.querySelector('.container'); 

    let cellNumber = 0;

         if(options[1].selected){
            cellNumber = 100;
            cellGenerator(cellNumber, containerEl);

            const cellList = document.querySelectorAll(".cell");

            for(let i = 0; i < cellList.length; i++){
                const thisCell = cellList[i];
                thisCell.classList.add("grid_10");
            }
        } else if (options[2].selected){
            cellNumber = 81;
            cellGenerator(cellNumber, containerEl);

            const cellList = document.querySelectorAll(".cell");
            for(let i = 0; i < cellList.length; i++){
                const thisCell = cellList[i];
                thisCell.classList.add("grid_9");
            }
        } else if(options[3].selected){
            cellNumber = 49;
            cellGenerator(cellNumber,containerEl);
            const cellList = document.querySelectorAll(".cell");
            for(let i = 0; i < cellList.length; i++){
                const thisCell = cellList[i];
                thisCell.classList.add("grid_7");
            }
        }
        
    const cellList = document.querySelectorAll(".cell");
    for(let i = 0; i < cellList.length; i++){
       const thisCell = cellList[i];
        // change cells color
       thisCell.addEventListener("click", function(){
            thisCell.classList.add("light_blue");
            console.log(i);
       })

    } 
})


