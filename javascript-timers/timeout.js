var test = document.querySelector('.message');

function change(e) {
  test.textContent = 'Hello There';
}

setTimeout(change, 2000);
