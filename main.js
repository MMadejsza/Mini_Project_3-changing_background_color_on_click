
document.body.addEventListener("click", changeBackground);
function changeBackground(e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`${x}, ${y}`);

    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.backgroundColor = "green";
    } else if (x % 2 !== 0 && y % 2 !== 0) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}