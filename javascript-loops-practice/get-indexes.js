/* exported getIndexes */
function getIndexes(array) {
  var arrs = [];
  array.forEach(arr => {
    arrs.push(array.indexOf(arr));
  });
  return arrs;
}
