const colorPalette = document.querySelector('#color-palette');
// console.log(colorPalette)
const corBlack = document.querySelector('#black');
const corRed = document.querySelector('#red');
const corBlue = document.querySelector('#blue');
const corOrange = document.querySelector('#orange');
const pixel = document.querySelectorAll('.pixel');
// console.log(pixel)
const pixelBoard = document.querySelector('#pixel-board');

// add classe selected ao elemento clicado
corBlack.addEventListener('click', event => {
    event.target.classList.add('selected');
    // console.log(event.target)
    corRed.classList.remove('selected');
    corBlue.classList.remove('selected');
    corOrange.classList.remove('selected');
});

// add classe selected ao elemento clicado
corRed.addEventListener('click', event => {
    event.target.classList.add('selected');
    // console.log(event.target);
    corBlack.classList.remove('selected');
    corBlue.classList.remove('selected');
    corOrange.classList.remove('selected');
});

// add classe selected ao elemento clicado
corBlue.addEventListener('click', event => {
    event.target.classList.add('selected');
    // console.log(event.target);
    corBlack.classList.remove('selected');
    corRed.classList.remove('selected');
    corOrange.classList.remove('selected');
});

// add classe selected ao elemento clicado
corOrange.addEventListener('click', event => {
    event.target.classList.add('selected');
    console.log(event.target);
    corBlack.classList.remove('selected');
    corRed.classList.remove('selected');
    corBlue.classList.remove('selected');
});

// 8
function alteraCorPixels(event) {
    for (let i = 0; i < corBlack.classList.length; i++) {
        if (corBlack.classList[i] === 'selected') {
            event.target.style.backgroundColor = 'black';
        }
    }
    
    if (corRed.classList.contains('selected')) {
        event.target.style.backgroundColor = 'red'
    }

    if (corBlue.classList.contains('selected')) {
        event.target.style.backgroundColor = 'blue';
    }

    for (let i = 0; i < corOrange.classList.length; i++) {
        if (corOrange.classList[i] === 'selected') {
            event.target.style.backgroundColor = 'orange';
        }
    }
}
pixelBoard.addEventListener('click', alteraCorPixels);


// 9
const buttonClearBoard = document.querySelector('#clear-board');
console.log(buttonClearBoard)
buttonClearBoard.addEventListener('click', clearPixelBoard);
function clearPixelBoard(event) {
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = '#fff'
        pixel[i].style.transition = '0.6s'
    }
}

