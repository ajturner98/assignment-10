let previous = document.querySelector('#previous');
let next = document.querySelector('#next');
let dragon = document.querySelector('#dragon');
let ourDiv = document.querySelector('#images');
let dragons = ["images/red.png", "images/blue.png", "images/green.png", "images/black.png", "images/white.png"];
let counter = 0;


next.onclick = () => {
    counter += 1;
    if (counter === dragons.length){
      counter = 0;
    }
    dragon.setAttribute("src",  dragons[counter]);
  }

  previous.onclick = () => {
      counter -= 1;
      if (counter < 0){
        counter = 4;
      }
      dragon.setAttribute("src",  dragons[counter]);
    }
//above is switching images

let descriptions = document.querySelectorAll('.descriptions')
let red = document.querySelector('#red')
let blue = document.querySelector('#blue')
let green = document.querySelector('#green')
let black = document.querySelector('#black')
let white = document.querySelector('#white')

descriptions.forEach(function(el){
el.style.display = 'none';}
)
dragon.onmouseover = () => {
  if (counter === 0){
    red.style.display = 'block';
  } else if (counter === 1){
    blue.style.display = 'block';
  } else if (counter === 2){
    green.style.display = 'block';
  } else if (counter === 3){
    black.style.display = 'block';
  } else {white.style.display = 'block';}
}
dragon.onmouseleave = () => {
  if (counter === 0){
    red.style.display = 'none';
  } else if (counter === 1){
    blue.style.display = 'none';
  } else if (counter === 2){
    green.style.display = 'none';
  } else if (counter === 3){
    black.style.display = 'none';
  } else {white.style.display = 'none';}
}
//Mouse over above
