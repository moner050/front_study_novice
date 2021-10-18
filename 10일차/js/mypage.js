const carouselSlide = document.querySelector('.carousel-main');
var carouselImages = document.querySelectorAll('.carousel-main .carousel-item');
const prevBtn = document.querySelector('#carousel-prev');
const nextBtn = document.querySelector('#carousel-next');
let counter = 1;
const elem = document.createElement('div');
const content = document.createTextNode(carouselImages[0].innerHTML);
elem.appendChild(content);
elem.className = 'carousel-item last';
var first = elem;
carouselSlide.appendChild(first);
carouselImages = document.querySelectorAll('.carousel-main .carousel-item');

const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// Buttons
nextBtn.addEventListener('click', ()=> {
    if(counter >= carouselImages.length) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Jump to First/Last Slide
carouselSlide.addEventListener('transitionend', () => {
    console.log(carouselImages[counter]);
    if(carouselImages[counter].className === 'carousel-item last'){
        carouselSlide.style.transition = 'none';
        counter = 0;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if(carouselImages[counter].className === 'carousel-item first'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length-1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});