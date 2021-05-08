document.getElementById('grayButton').onclick = switchGray
document.getElementById('whiteButton').onclick = switchWhite
document.getElementById('blueButton').onclick = switchBlue
document.getElementById('yellowButton').onclick = switchYellow
document.getElementById('orangeButton').onclick = switchOrange
document.getElementById('pinkButton').onclick = switchPink

function switchGray() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchWhite() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchBlue() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchYellow() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchOrange() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'orange';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchPink() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'pink';
    document.getElementsByTagName('body')[0].style.color = 'white';
}