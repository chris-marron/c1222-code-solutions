/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  newWord = newWord.slice(0, 1).toUpperCase() + newWord.slice(1);
  if (newWord === 'Javascript') {
    newWord = newWord.slice(0, 1).toUpperCase() + newWord.slice(1, 4) + newWord.slice(4, 5).toUpperCase() + newWord.slice(5);
  }
  return newWord;
}
