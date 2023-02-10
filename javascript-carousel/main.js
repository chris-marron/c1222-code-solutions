const images = [
  {
    id: 0,
    src: 'images/025.png'
  },
  {
    id: 1,
    src: 'images/004.png'
  },
  {
    id: 2,
    src: 'images/007.png'
  },
  {
    id: 3,
    src: 'images/001.png'
  },
  {
    id: 4,
    src: 'images/039.png'
  }
];

const dots = document.querySelector('#ok');

function domCr(es) {
  const dok = document.createElement('i');
  dok.classList.add('fa-circle');
  dok.classList.add('fa-solid');
  dots.append(dok);
  return dots;
}

function loops() {
  for (let i = 0; i < images.length; i++) {
    domCr(images[i].src);
  }
  const dotse = document.querySelectorAll('i');
  for (let j = 0; j < dotse.length; j++) {
    dotse[j].addEventListener('click', e => {
      // console.log(e);
    });
  }
}

loops();
