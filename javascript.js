function createGrid(size){
    const container = document.querySelector('#container');
    for (i = 1; i < size+1; i++){
        const row = document.createElement('div');
        row.setAttribute('id',`row${i}`);
        row.classList.add('row');
        container.appendChild(row);
        for (x = 0; x < size; x++){
           console.log(i);
           let currentRow = document.querySelector(`#row${i}`);
           const cell = document.createElement('div');
           currentRow.appendChild(cell);
        }
    }
    return 'updated';
}

function validateUserInput(userInput){
    if (isNaN(userInput)){
        invalidInput.textContent = `You must enter a number. You entered ${userInput}`;
    } else if (userInput % 1 != 0){
        invalidInput.textContent = `You must enter a whole number. You entered ${userInput}`
    } else if (userInput <= 0 || userInput > 100){
        invalidInput.textContent = `You must enter a number between 1 and 100. You entered ${userInput}`
    } else {
        invalidInput.textContent = "";
        return true;
    }
}

let squareRoot = 16;
createGrid(squareRoot);
let cells = container.querySelectorAll('div.row > div');

function cellHover(){
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            addColor(cell);
        })
    });
};
cellHover();

const buttonContainer = document.querySelector('#button-container');
const invalidInput = document.createElement('div');
invalidInput.style.cssText = 'color: red;';
buttonContainer.appendChild(invalidInput);
changeGridSize = document.querySelector('button');
changeGridSize.addEventListener('click', () => {
    container.innerHTML = '';
    let userInput = prompt(`Type a number between 1 and 100`);
    if (validateUserInput(userInput) == true) {
        userInput = parseInt(userInput);
        squareRoot = userInput;
    } ;
    createGrid(squareRoot);
    cells = container.querySelectorAll('div.row > div');
    cellHover();
})

function addColor(cell){
    cell.classList.add('colored');
}