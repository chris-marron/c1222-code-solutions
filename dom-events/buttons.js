function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var queryClick = document.querySelector('.click-button');

queryClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var queryHover = document.querySelector('.hover-button');

queryHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var queryDouble = document.querySelector('.double-click-button');

queryDouble.addEventListener('dblclick', handleDoubleClick);
