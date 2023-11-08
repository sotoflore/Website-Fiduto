
let slideIndex = 0;
const slideHeight = document.querySelector('.card-slider').offsetHeight;
const totalSlides = document.querySelectorAll('.cards .card-content').length;

//---- cambiar color de fondo del Header al dar scroll ----
function changeNabvarBackgroundColor(){
    let navBar = document.querySelector('.navbar');
    const isScrolled = window.scrollY > 50;
    isScrolled ? navBar.classList.add('bg-dark') : navBar.classList.remove('bg-dark');
}
window.addEventListener('scroll', changeNabvarBackgroundColor); 

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

//--------- cerar menu -----------
function closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }
}
document.addEventListener('click', closeNavbar);