var queryForm = document.querySelector('#contact-form');

function logSubmit(event) {
  event.preventDefault();
  var obj = {};
  obj.Name = queryForm.elements.name.value;
  obj.Email = queryForm.elements.email.value;
  obj.Message = queryForm.elements.message.value;
  console.log('messageData: ', obj);
}

queryForm.addEventListener('submit', logSubmit);
