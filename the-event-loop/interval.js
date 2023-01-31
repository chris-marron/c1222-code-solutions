let currNum = 3;
const interval = setInterval(() => {
  console.log(currNum);
  if (currNum > 0) {
    currNum--;
  } else {
    console.log('Blast Off!');
    clearInterval(interval);
  }

}, 1000);
