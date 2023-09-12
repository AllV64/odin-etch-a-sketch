function createGrid(size){
    const container = document.querySelector('#container');
    for (i = 1; i < size+1; i++){
        const row = document.createElement('div');
        row.setAttribute('id',`row${i}`);
        row.classList.add('row');
        container.appendChild(row);
        for (x = 0; x < size; x++){
           let currentRow = document.querySelector(`#row${i}`);
           const cell = document.createElement('div');
           currentRow.appendChild(cell);
        }
    }
    return 'updated';
};

let squareRoot = 16;
createGrid(squareRoot);
let cells = container.querySelectorAll('div.row > div');

function cellHover(){
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            addRandomColor(cell);
            addBrightness(cell);
        });
    });
};
cellHover();

function addRandomColor(cell){
    if (cell.style.background == ""){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        cell.style.cssText = `background: rgb(${red}, ${green}, ${blue})`; 
    }
};

function addBrightness(cell){
    if (cell.style.filter == ''){
        cell.style.filter = 'brightness(0.1)';
    } else if (cell.style.filter == 'brightness(1)'){
        cell.style.filter == cell.style.filter;
    } else {
        let brightnessValue = cell.style.filter.slice(-4, -1);
        cell.style.filter = `brightness(${parseFloat(brightnessValue) + 0.1})`;
    }
    
};

const buttonContainer = document.querySelector('#button-container');
const invalidInput = document.createElement('div');
invalidInput.setAttribute('id', 'invalidInputText');
buttonContainer.appendChild(invalidInput);

changeGridSize = document.querySelector('button');
changeGridSize.addEventListener('click', () => {
    container.innerHTML = '';
    let userInput = prompt(`Type a number between 1 and 100`);
    if (validateUserInput(userInput) == true) {
        userInput = parseInt(userInput);
        squareRoot = userInput;
    };
    createGrid(squareRoot);
    cells = container.querySelectorAll('div.row > div');
    cellHover();
});

function validateUserInput(userInput){
    if (isNaN(userInput)){
        invalidInput.textContent = `You must enter a number. You entered ${userInput}`;
    } else if (userInput % 1 != 0){
        invalidInput.textContent = `You must enter a whole number. You entered ${userInput}`
    } else if (userInput == null){
        invalidInput.textContent = "";
    }else if (userInput <= 0 || userInput > 100){
        invalidInput.textContent = `You must enter a number between 1 and 100. You entered ${userInput}`
    } else {
        invalidInput.textContent = "";
        return true;
    }
};

