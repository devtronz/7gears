// Loader
window.addEventListener('load', function() {
  setTimeout(function() {
    var loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.style.display = 'none';
      }, 700);
    }
  }, 800);
});

// Collapsible header on scroll
let lastScrollY = window.scrollY;
const header = document.querySelector('.collapsible-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 60) {
    header.classList.add('collapsed');
  } else {
    header.classList.remove('collapsed');
  }
  lastScrollY = window.scrollY;
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const answer = this.nextElementSibling;
    if (this.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

// Section fade-in on scroll
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(function(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
