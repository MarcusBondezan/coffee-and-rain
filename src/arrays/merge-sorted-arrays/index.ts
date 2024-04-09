//Create a function that merges two sorted arrays:
//[0,3,4,31] e [4,6,30] turns into [0,3,4,4,6,30,31]

export function mergeSortedArrays(array1: number[], array2: number[]): number[] {
  const mergedArray: number[] = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //Check input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}