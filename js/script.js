const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollHeaderOverlay(){
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("overlay").className = "overlay";
  } else {
    document.getElementById("overlay").className = "";
  }
}
