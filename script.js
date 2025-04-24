let colorButton = document.getElementById('color-btn');
let colorPad = document.getElementById('color-pad');
let ColorCode = document.getElementById('color-code')

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
  ColorCode.innerHTML = color;
}

function setRandomColor() {
  colorButton.onclick = getRandomColor;

}

setRandomColor();

