var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function (e) {
  console.log('status:', xhr.status);
  console.log('response:', xhr.response);
  var responseXhr = xhr.response;
  for (var i = 0; i < responseXhr.length; i++) {
    var test = document.createElement('li');
    test.textContent = responseXhr[i].name;
    $userList.appendChild(test);
  }
});
xhr.send();
