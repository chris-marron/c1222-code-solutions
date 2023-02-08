var $theOne = document.querySelector('.modal');
var $theModal = document.querySelector('#the-modal');
var $no = document.querySelector('.move');

$theOne.addEventListener('click', test);
function test(event) {
  event.preventDefault();
  $theModal.className = 'themodal';
}
$no.addEventListener('click', e => {
  e.preventDefault();
  $theModal.className = 'hidden';
});
