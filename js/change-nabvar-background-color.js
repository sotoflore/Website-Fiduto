function changeNabvarBackgroundColor(){
    let navBar = document.querySelector('.navbar');
    const isScrolled = window.scrollY > 50;
    isScrolled ? navBar.classList.add('bg-dark') : navBar.classList.remove('bg-dark');
}
window.addEventListener('scroll', changeNabvarBackgroundColor); 