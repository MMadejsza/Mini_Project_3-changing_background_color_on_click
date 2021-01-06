
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

const changeColor = (event) => {
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

    switch (event.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red},${green < 255 ? green++ : green},${blue < 255 ? blue++ : blue})`
            console.log(red);
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? red-- : red},${green > 0 ? green-- : green},${blue > 0 ? blue-- : blue})`
            console.log(red);
            break;
    }
}

window.addEventListener("keydown", changeColor);