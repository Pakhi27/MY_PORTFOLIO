
const words = ["Programmer", "Dancer", "Singer"];
const element = document.getElementById("element");

let index = 0;

function changeWord() {

    element.textContent = words[index];
    index++;

    if (index === words.length) {
        index = 0;
    }
}

changeWord();

setInterval(changeWord, 2000);
