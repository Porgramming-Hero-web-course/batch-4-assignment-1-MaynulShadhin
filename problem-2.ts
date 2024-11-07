const removeDuplicates = (array: number[]): number[] => {
  return array.filter((value, idx) => array.indexOf(value) === idx);
};

// const noDuplicate = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(noDuplicate);
