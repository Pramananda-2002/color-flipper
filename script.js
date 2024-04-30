const body = document.getElementsByTagName("body")[0];
const audio = new Audio();
audio.src = "./newClick.mp3";
audio.preload = "auto";

function setColor(name){
    body.style.backgroundColor = name;
    audio.play();
}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color
    audio.play();
}