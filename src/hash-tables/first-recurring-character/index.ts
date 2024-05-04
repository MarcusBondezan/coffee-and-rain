/*
Given an array, tell me what is the first recurring item.

Examples:
  Given an array = [2,5,1,2,3,5,1,2,4]
  It should return 2

  Given an array = [2,1,1,2,3,5,1,2,4]
  It should return 1

  Given an array = [2,3,4,5]
  It should return undefined
*/


// O(n)
export function firstRecurringNumber(input: number[]): number | undefined {
  let map = {};

  for (let i=0; i < input.length; i++) {
    if (!!map[input[i]]) {
      return input[i];
    }
    map[input[i]] = true;
  }

  return undefined;
}