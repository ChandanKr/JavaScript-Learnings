let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyCodeDiv = document.querySelector('.copyCode');

let topArrowButton = document.getElementById('topArrow');
let bottomArrowButton = document.getElementById('bottomArrow');
let leftArrowButton = document.getElementById('leftArrow');
let rightArrowButton = document.getElementById('rightArrow');
let topLeftArrowButton = document.getElementById('topLeftArrow');
let topRightArrowButton = document.getElementById('topRightArrow');
let bottomLeftArrowButton = document.getElementById('bottomLeftArrow');
let bottomRightArrowButton = document.getElementById('bottomRightArrow');

let rgb1 = "#5EDE7B";
let rgb2 = "#02A171";
let direction = "to right";

const hexValues = () => {
  let myHexValues = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + myHexValues[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};

const handleButton1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    btn1.innerHTML = `${rgb1}`;
    btn1.style.backgroundColor = `${rgb1}`;
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerHTML = `${rgb2}`;
    btn2.style.backgroundColor = `${rgb2}`;
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}t, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyCodeDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copyCodeDiv.innerText);
    alert("CSS code copied, you can use it anywhere now 😎");
});

topArrowButton.addEventListener('click', () => {
    direction = "to top";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

bottomArrowButton.addEventListener('click', () => {
    direction = "to bottom";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

leftArrowButton.addEventListener('click', () => {
    direction = "to left";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

rightArrowButton.addEventListener('click', () => {
    direction = "to right";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

topLeftArrowButton.addEventListener('click', () => {
    direction = "to top left";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

topRightArrowButton.addEventListener('click', () => {
    direction = "to top right";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

bottomLeftArrowButton.addEventListener('click', () => {
    direction = "to bottom left";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

bottomRightArrowButton.addEventListener('click', () => {
    direction = "to bottom right";
    document.body.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
    copyCodeDiv.innerHTML = `background-image: linear-gradient(${direction}, ${rgb1}, ${rgb2});`;
    copyCodeDiv.style.backgroundImage = `linear-gradient(${direction}, ${rgb1}, ${rgb2})`;
});

