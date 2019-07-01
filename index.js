module.exports.concatJS = function() {
  const concat = (arr, ...elements) => {
    for (let i = 0; i < elements.length; i++) {
      arr.push(elements[i]);
    }
    return arr;
  };
};

module.exports.popJS = function() {
  const pop = function(arr) {
    const lastItem = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastItem;
  };
};
