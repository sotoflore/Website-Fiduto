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