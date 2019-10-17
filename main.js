function getFirstItemFrom(arr) {
  return arr[0]
}

function getLastItemFrom(arr) {
  const lastIndex = arr.length - 1
  return arr[lastIndex]
}

function getIndex3(arr) {
  if (arr.length < 4) {
    return getLastItemFrom(arr);
  } 
  
   return arr[3];
  }
  
  
function firstItemIsNumber() {
  return 
}

function isLongList() {

}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}