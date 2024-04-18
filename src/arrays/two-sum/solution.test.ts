import { twoSum } from "./solution";

describe('twoSum', function() {
  it('1', function() {
    const result = twoSum([2,7,11,15], 9);
    expect(result).toStrictEqual([0, 1]);
  });
  
  it('2', function() {
    const result = twoSum([3,2,4], 6);
    expect(result).toStrictEqual([1, 2]);
  });
  
  it('3', function() {
    const result = twoSum([3,3], 6);
    expect(result).toStrictEqual([0, 1]);
  });

  it('4', function() {
    const result = twoSum([30,1,90,45,13,24,0,2], 15);
    expect(result).toStrictEqual([4, 7]);
  });

  it('5', function() {
    expect(() => twoSum([30], 15)).toThrow('Nums length not permitted');
  });

  it('6', function() {
    expect(() => twoSum([30, -110], 15)).toThrow('Invalid value in the num array');
  });

  it('7', function() {
    expect(() => twoSum([30, 110], 15)).toThrow('Invalid value in the num array');
  });

  it('8', function() {
    expect(() => twoSum([30, 11], 150)).toThrow('Invalid target value');
  });

  it('9', function() {
    expect(() => twoSum([30, 11], 0)).toThrow('There is not a solution for this case');
  });
});
