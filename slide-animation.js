(function () {
  'use strict';

  function initScrollSlide() {
    var cards = document.querySelectorAll('.product-slide-card');
    if (!cards.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollSlide);
  } else {
    initScrollSlide();
  }
})();
