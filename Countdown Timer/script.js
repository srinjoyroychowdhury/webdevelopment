document.getElementById('startButton').addEventListener('click', startCountdown);

function startCountdown() {
  const datetimeInput = document.getElementById('datetimeInput').value;
  const targetDate = new Date(datetimeInput).getTime();
  
  if (isNaN(targetDate)) {
    alert('Please select a valid date and time.');
    return;
  }

  const countdownElement = document.getElementById('countdown');

  const interval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = 'Countdown Expired!';
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}
