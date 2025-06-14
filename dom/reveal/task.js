const reveals = document.querySelectorAll('.reveal');

function checkReveal(element) {
 const rect = element.getBoundingClientRect();
 const windowHeight = window.innerHeight;
 
  return rect.top <= windowHeight && rect.bottom >= 0;
}

function handleScroll() {
 reveals.forEach(reveal => {
 if (checkReveal(reveal)) {
 reveal.classList.add('reveal_active');
 }
 });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

handleScroll();
