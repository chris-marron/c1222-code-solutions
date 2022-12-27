var test = document.querySelectorAll('span');

for (var i = 0; i < test.length; i++) {
  var oneTest = test[i].textContent;
  document.addEventListener('keydown', function (e) {
    if (e.key === 'i') {
      oneTest.className = 'pressed';
    }
  });
}
