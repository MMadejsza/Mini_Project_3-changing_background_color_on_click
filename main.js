
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
document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

const changeColor = (event) => {

}

window.addEventListener("keyDown", changeColor);