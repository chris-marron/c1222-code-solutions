function handleFocus(event) {
  console.log('focus event fired');
  console.log(' event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {

  console.log('value of name: ', event.target.name, event.target.value);
}

var queryInp = document.querySelector('#user-name');
var queryInp2 = document.querySelector('#user-email');
var queryText = document.querySelector('#user-message');

queryInp.addEventListener('focus', handleFocus);
queryInp.addEventListener('blur', handleBlur);
queryInp.addEventListener('input', handleInput);
queryInp2.addEventListener('focus', handleFocus);
queryInp2.addEventListener('blur', handleBlur);
queryInp2.addEventListener('input', handleInput);
queryText.addEventListener('focus', handleFocus);
queryText.addEventListener('blur', handleBlur);
queryText.addEventListener('input', handleInput);
