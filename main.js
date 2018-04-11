const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    //Need to take case of the extra space when the nav is fixed
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    //put the class as high as you can go so you can target nav easier
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);
