var countdown = document.querySelector('.countdown-display');
var countdownTimer = setInterval(count, 1500);
function count(numbers) {
  countdown.textContent--;
  if (countdown.textContent === '0') {
    countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownTimer);

  }
}
