var test = document.querySelector('button');

function tester(event) {
  var onetime = document.querySelector('button');
  var othertime = document.querySelector('body');

  if (onetime) {
    onetime.className = 'light';
    othertime.className = 'lights';
  }
}

test.addEventListener('click', tester);
