//func that sets size of the circles
function settingCircleFunc(circle, factor) { 
    circle.style.width = `${factor * 100}px` 
    circle.style.height = `${factor * 100}px`
}
// adding parent to nodas
function addinNewNoda(parent, newNoda) { 
    parent.appendChild(newNoda)
}
//func that centering circles 
function centrify(noda) { 
    noda.style.display = "flex";
    noda.style.alignItems = "center";
    noda.style.justifyContent = "center";
    noda.style.borderRadius = "50%"
}  

function positionAbsolute(noda) {
    noda.style.position = "absolute"
}
// adding main container to html doc
const containerElement = document.createElement('div');
document.body.appendChild(containerElement);
containerElement.setAttribute('class', 'main-container');

//setting main playing zone
const mainDartsField = document.createElement('div');
addinNewNoda(containerElement, mainDartsField)
settingCircleFunc(mainDartsField, 7);
mainDartsField.style.backgroundColor = "black";
centrify(mainDartsField)
mainDartsField.style.position = "absolute";
mainDartsField.style.left = '30%';
mainDartsField.style.top = '10%';

// first circle
const firstDartsField = document.createElement('div');
addinNewNoda(mainDartsField, firstDartsField)
settingCircleFunc(firstDartsField, 5);
firstDartsField.style.backgroundColor = "white";
centrify(firstDartsField);

//second circel
const secondDartsField = document.createElement('div');
addinNewNoda(firstDartsField, secondDartsField)
settingCircleFunc(secondDartsField, 3);
secondDartsField.style.backgroundColor = "black";
centrify(secondDartsField);

// bullseye point red
const thirdDartsField = document.createElement('div');
addinNewNoda(secondDartsField, thirdDartsField)
settingCircleFunc(thirdDartsField, 1);
thirdDartsField.style.backgroundColor = "red";
centrify(thirdDartsField);

// extreme bullseye point
const bullseye = document.createElement("div");
addinNewNoda(thirdDartsField, bullseye);
settingCircleFunc(bullseye, 0.25);
bullseye.style.backgroundColor = "black";
centrify(bullseye)

//points on dashboard
const points1 = document.createElement("label");
addinNewNoda(mainDartsField, points1);
points1.style.color = "white";
points1.style.left = "92%"
points1.style.top = "50%"
points1.style.position = "absolute"
points1.innerText = "1"
points1.style.fontSize = "20px"

const points10 = document.createElement("label");
addinNewNoda(firstDartsField, points10);
points10.style.color = "black";
points10.style.left = "77%"
points10.style.top = "50%"
points10.style.position = "absolute"
points10.innerText = "10"
points10.style.fontSize = "20px"

const points20 = document.createElement("label");
addinNewNoda(secondDartsField, points20);
points20.style.color = "white";
points20.style.left = "62%"
points20.style.top = "50%"
points20.style.position = "absolute"
points20.innerText = "20"
points20.style.fontSize = "20px"


document.body.setAttribute('background', 'src/background_image.jpg')
document.body.style.backgroundSize = '100%'

let playerScore = 0;
const scoreBox = document.body.appendChild(document.createElement("div"))
positionAbsolute(scoreBox)
scoreBox.style.left = "80%"
scoreBox.style.top = "20%"
scoreBox.style.color = "white"
scoreBox.style.backgroundColor = "black"
scoreBox.style.fontSize = "20px"
scoreBox.innerText = `Yours score: \n ${playerScore}`
//reset score label
const resetPlayerScore = document.body.appendChild(document.createElement("label"))
positionAbsolute(resetPlayerScore)
resetPlayerScore.style.left = "80%"
resetPlayerScore.style.top = "40%"
resetPlayerScore.style.color = "white"
resetPlayerScore.style.backgroundColor = "black"
resetPlayerScore.style.fontSize = "20px"
resetPlayerScore.innerText = `Click to reset yours score`

resetPlayerScore.onclick = (event) => { 
    event.stopPropagation();
    playerScore = 0;
    scoreBox.innerText = `Yours score: \n ${playerScore}`
}

mainDartsField.onclick = (event) => {
    event.stopPropagation();
    console.log(event.target)
    playerScore += 1;
    scoreBox.innerText = `Yours score: \n ${playerScore}`;
}
firstDartsField.onclick = (event) => {
    event.stopPropagation();
    console.log(event.target)
    playerScore += 10;
    scoreBox.innerText = `Yours score: \n ${playerScore}`;
}
secondDartsField.onclick = (event) => {
    event.stopPropagation();
    console.log(event.target)
    playerScore += 20;
    scoreBox.innerText = `Yours score: \n ${playerScore}`;
}
thirdDartsField.onclick = (event) => {
    event.stopPropagation();
    console.log(event.target)
    playerScore += 50;
    scoreBox.innerText = `Yours score: \n ${playerScore}`;
}
bullseye.onclick = (event) => {
    event.stopPropagation();
    console.log(event.target)
    playerScore += 100;
    scoreBox.innerText = `Yours score: \n ${playerScore}`;
}

//running target
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function randomPozition(elem) {
    setInterval(() => {
        elem.style.left = `${randomInteger(0, 40)}%`
        elem.style.top = `${randomInteger(0, 25)}%`
    }, 1000)
}

mainDartsField.style.transition = "1s all"
//first  rand position
mainDartsField.style.left = `${randomInteger(0, 40)}%`
mainDartsField.style.top = `${randomInteger(0, 25)}%`
randomPozition(mainDartsField)