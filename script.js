const grid = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
        grid.addEventListener('mouseover', fillBlack)
    };
};

function removeGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    })
}

function getColor() {
    let letters = '0123456789ABCDEF';
    let getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
    let randColor = '#';
    for (let i = 0; i < 6; i++ ) {
        getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
        randColor += getRandLetter;
    };
    return randColor;
}

function fillBlack(e) {
    if (e.target.className === 'square') {
        e.target.style.backgroundColor = 'black';
        e.target.style.border = 'black'
    }
}

function fillColor(e) {
    if (e.target.className === 'square') {
        e.target.style.backgroundColor = getColor();
        e.target.style.border = 'none';
    }
}

createGrid();

function newGrid(userInput) {
    const dblUserInput = (userInput * userInput)
    grid.style.gridTemplateColumns = `repeat(${userInput}, 2fr)`
    grid.style.gridTemplateRows = `repeat(${userInput}, 2fr)`
    for (let i = 0; i < dblUserInput; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
        grid.addEventListener('mouseover', fillBlack)
    };
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function(e) {
    if (e.target.className == 'black') {
        grid.removeEventListener('mouseover', fillColor);
        grid.addEventListener('mouseover', fillBlack)
    }
    else if (e.target.className == 'random') {
        grid.removeEventListener('mouseover',fillBlack);
        grid.addEventListener('mouseover', fillColor)
    }
    else if (e.target.className == 'reset') {
        removeGrid();
        grid.style.gridTemplateColumns = 'repeat(16, 2fr)';
        grid.style.gridTemplateRows = 'repeat(16, 2fr)';
        createGrid(16);
    }
    else if (e.target.className == 'new-grid') {
        const userInput = prompt('How many squares do you want in the grid?');
        removeGrid();
        newGrid(userInput);
    }
})
