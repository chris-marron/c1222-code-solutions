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
let num = 0;

const dots = document.querySelector('#ok');
const img = document.querySelector('#poke-img');

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
  clearInterval(interval);
  interval = setInterval(() => {
    next();
  }
  , 3000);
}

const right = document.querySelector('.fa-angle-right');
const left = document.querySelector('.fa-angle-left');
left.addEventListener('click', () => {
  if (num === 0) {
    num = images.length - 1;
  } else {
    num--;
  }

  const dotse = document.querySelectorAll('.fa-circle');
  for (let j = 0; j < dotse.length; j++) {
    if (dotse[j] === dotse[num]) {
      dotse[j].classList.add('dark');
    } else {
      dotse[j].classList.remove('dark');
    }

    dotse[j].addEventListener('click', () => {
      img.setAttribute('src', images[j].src);
      dotse[num].classList.remove('dark');
      num = j;
      dotse[num].classList.add('dark');
      clearInterval(interval);
      interval = setInterval(() => {
        next();
      }
      , 3000);
    });
  }
  clearInterval(interval);
  interval = setInterval(() => {
    next();
  }
  , 3000);
  return img.setAttribute('src', images[num].src);

});

function next() {
  if (num === images.length - 1) {
    num = 0;
  } else {
    num++;
  }
  const dotse = document.querySelectorAll('.fa-circle');
  for (let j = 0; j < dotse.length; j++) {
    if (dotse[j] === dotse[num]) {
      dotse[j].classList.add('dark');
    } else {
      dotse[j].classList.remove('dark');
    }

    dotse[j].addEventListener('click', () => {
      img.setAttribute('src', images[j].src);
      dotse[num].classList.remove('dark');
      num = j;
      dotse[num].classList.add('dark');
      clearInterval(interval);
      interval = setInterval(() => {
        next();
      }
      , 3000);
    });
  }
  clearInterval(interval);
  interval = setInterval(() => {
    next();
  }
  , 3000);
  return img.setAttribute('src', images[num].src);
}
right.addEventListener('click', next);

let interval = setInterval(() => {
  next();
}
, 3000);
loops();
