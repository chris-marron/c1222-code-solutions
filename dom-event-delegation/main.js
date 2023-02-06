var $task = document.querySelector('.task-list');

function taskList(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var test = event.target.closest('.task-list-item');
    console.log('closest .task-list-item:', test);
    test.remove();
  }
}
$task.addEventListener('click', taskList);
