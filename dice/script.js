var dice = document.createElement("h1");
var num = Math.floor(Math.random()*21)
dice.innerText = num;
document.body.appendChild(dice);
console.log(num)