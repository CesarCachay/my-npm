const concatJS = (arr, ...elements) => {
  for (let i = 0; i < elements.length; i++) {
    arr.push(elements[i]);
  }
  return arr;
};

const popJS = function(arr) {
  const lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
};

const emptyJS = something => {
  return something.length === 0;
};

const capitalizeJS = string => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export { concatJS, popJS, emptyJS, capitalizeJS };
