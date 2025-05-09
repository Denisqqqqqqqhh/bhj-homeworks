const timerElement = document.getElementById('timer');

let totalSeconds = parseInt(timerElement.textContent);

function formatTime(seconds) {
 const hours = Math.floor(seconds / 3600);
 const minutes = Math.floor((seconds % 3600) / 60);
 const secs = seconds % 60;
 
 return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

const intervalId = setInterval(() => {
 totalSeconds--;

 timerElement.textContent = formatTime(totalSeconds);
 
 if (totalSeconds <= 0) {
 clearInterval(intervalId);
 alert('Вы победили в конкурсе!');
 }
}, 1000);
