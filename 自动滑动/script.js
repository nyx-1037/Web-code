let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        if (idx === i) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

function previousSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
}

// 自动滚动
setInterval(nextSlide, 3000); // 每3秒切换到下一张照片

// 鼠标悬停停止自动滚动，移开继续滚动
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => {
    clearInterval(autoScroll);
});
slider.addEventListener('mouseout', () => {
    autoScroll = setInterval(nextSlide, 3000);
});

// 初始化第一张照片
showSlide(index);