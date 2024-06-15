
let lastTime = 0;
let frameCount = 0;
let fps = 0;
const fpsCounter = document.getElementById('fps-counter');

function calculateFPS(currentTime) {
    const delta = currentTime - lastTime;
    if (delta >= 1000) {
        fps = frameCount / (delta / 1000);
        lastTime = currentTime;
        frameCount = 0;
        fpsCounter.textContent = `FPS: ${fps.toFixed(2)}`;
    }
    frameCount++;
    requestAnimationFrame(calculateFPS);
}

requestAnimationFrame(calculateFPS);
