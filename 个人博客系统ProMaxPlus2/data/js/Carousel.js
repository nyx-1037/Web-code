const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemCount = carouselItems.length;
const containerWidth = carouselContainer.offsetWidth;
const itemWidth = containerWidth / Math.floor(containerWidth / carouselItems[0].offsetWidth);
let currentIndex = 0;
let isTransitioning = false;

function cloneFirstItems() {
  for (let i = 0; i < itemCount; i++) {
    const clone = carouselItems[i].cloneNode(true);
    carouselContainer.appendChild(clone);
  }
}

function moveCarousel() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  carouselContainer.addEventListener('transitionend', function onTransitionEnd() {
    carouselContainer.removeEventListener('transitionend', onTransitionEnd);
    if (currentIndex >= itemCount) {
      currentIndex = 0;
      carouselContainer.style.transition = 'none';
      carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      setTimeout(() => {
        carouselContainer.style.transition = '';
      }, 0);
    }
    isTransitioning = false;
  }, { once: true });
}

cloneFirstItems();
setInterval(moveCarousel, 1000); // 3秒滚动一次