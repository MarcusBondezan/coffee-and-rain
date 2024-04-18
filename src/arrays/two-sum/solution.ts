export function twoSum(nums: number[], target: number): number[] {
  if(nums.length < 2 || nums.length > 104) {
    throw new Error('Nums length not permitted')
  }

  if(nums.some((num) => (num < -109 || num > 109))) {
    throw new Error(`Invalid value in the num array`)
  }

  if (target < -109 || target > 109) {
    throw new Error('Invalid target value')
  }


  for (let i = 0; i <= nums.length - 2; i++) {
    for(let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }

  throw new Error('There is not a solution for this case')
}