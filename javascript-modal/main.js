var $theOne = document.querySelector('.modal');
var $theModal = document.querySelector('.hidden');

$theOne.addEventListener('click', test);
function test(event) {
  event.preventDefault();
  if (event.target === $theOne) {
    $theModal.className = 'themodal';
  }

}
