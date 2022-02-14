const navSlide = () => {
  const burger =  document.querySelector('.burger');
  const nav = document.querySelector('.header__links');
  const navLinks = document.querySelectorAll('.header__links .header__link');
  const burgerLink = document.querySelector('.burger__link');
  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('header__links-active');
    //Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });
    burger.classList.toggle('burger__menu');
    burger.classList.toggle('burger__menu');
    burger.classList.toggle('burger__menu');
  });
}

navSlide();