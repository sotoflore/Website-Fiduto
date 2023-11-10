let slideIndex = 0;
const slideHeight = document.querySelector('.card-slider').offsetHeight;
const totalSlides = document.querySelectorAll('.cards .card-content').length;

//---- slider vertical de los testimonios ----
function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  const offset = -slideIndex * slideHeight + 'px';

  document.querySelector('.cards').style.transform = `translateY(${offset})`;

  if (slideIndex === totalSlides - 1) {
    setTimeout(() => {
      slideIndex = 0;
      document.querySelector('.cards').style.transition = 'none';
      document.querySelector('.cards').style.transform = `translateY(0)`;
      setTimeout(() => {
        document.querySelector('.cards').style.transition = 'transform 0.5s ease-in-out';
      }, 100);
    }, 500);
  }
}
setInterval(nextSlide, 2000);

//---------------- corousel ----------
const imgContainer = document.querySelector('.img-container');
const images = document.querySelectorAll('.img-container > div');

  imgContainer.innerHTML += imgContainer.innerHTML;
  let scrollAmount = 0;
    
function scrollCarousel() {
  scrollAmount++;
  imgContainer.style.transform = `translateX(${-scrollAmount}px)`;

  if (scrollAmount >= imgContainer.offsetWidth) {
    scrollAmount = 0;
  }
  requestAnimationFrame(scrollCarousel);
}
scrollCarousel();