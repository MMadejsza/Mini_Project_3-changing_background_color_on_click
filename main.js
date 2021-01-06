
document.body.addEventListener("click", changeBackground);
function changeBackground(e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`${x}, ${y}`);

    if (x % 2 == 0 && y % 2 == 0) {
        return document.body.style.backgroundColor = "green";
    } else if (x % 2 !== 0 && y % 2 !== 0) {
        return document.body.style.backgroundColor = "red";
    } else {
        return document.body.style.backgroundColor = "blue";
    }
}

let red = 150;
let green = 150;
let blue = 150;
let pressedKeyCode;
document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

const changeColor = (event) => {
    pressKeyCode = event.keyCode;
    console.log(event.keyCode);

    switch (pressedKeyCode) {
        case 38:

            break;
        case 40:

            break;
    }
}

window.addEventListener("keydown", changeColor);