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

let squareRoot = 4;
let cells = container.querySelectorAll('div.row > div');
if (createGrid(squareRoot) == 'updated'){
    cells = container.querySelectorAll('div.row > div');
}

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        addColor(cell);
    })
});

changeGridSize = document.querySelector('button');
changeGridSize.addEventListener('click', () => {
    container.innerHTML = '';
})

function addColor(cell){
    cell.classList.add('colored');
}