let prev = document.querySelector('.goPrev');
let next = document.querySelector('.goNext');

let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlider = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
  currentSlider--;
  if(currentSlider < 0) {
    currentSlider = totalSlides - 1;
  }
  updateMargin();
}

prev.addEventListener('click', goPrev);

function goNext() {
  currentSlider++;
  if(currentSlider > (totalSlides-1)){
    currentSlider = 0;
  }  
  updateMargin();
}

next.addEventListener('click', goNext);

function updateMargin() {
  let sliderWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlider * sliderWidth);

  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 5000)

