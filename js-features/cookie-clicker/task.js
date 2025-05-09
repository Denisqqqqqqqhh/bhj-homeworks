const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
const speedElement = document.getElementById('clicker__speed');

let clickCount = 0;
let lastClickTime = null;
let isSmall = false;

cookie.onclick = function() {
    clickCount++;
    counterElement.textContent = clickCount;


    if (isSmall) {
        cookie.style.width = '200px';
        cookie.style.height = '200px';
    } else {
        cookie.style.width = '180px';
        cookie.style.height = '180px';
    }
    isSmall = !isSmall;

     const now = new Date();
    
    if (lastClickTime !== null) {
        const timeDiff = (now - lastClickTime) / 1000;
        const clickSpeed = timeDiff > 0 ? 1 / timeDiff : 0;
        speedElement.textContent = clickSpeed.toFixed(2);
        console.log(`Скорость клика: ${clickSpeed.toFixed(2)} кликов/сек`);
    }
    lastClickTime = now;
}
