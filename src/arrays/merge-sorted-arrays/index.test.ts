import { mergeSortedArrays } from ".";

describe('mergeSortedArrays', function () {

  it('1', function() {
    const result = mergeSortedArrays([0,3,4,31], [4,6,30]);

    console.log(result)

    expect(result).toStrictEqual([0,3,4,4,6,30,31]);
  });

  it('2', function() {
    const result = mergeSortedArrays([899], [4,6,30]);

    console.log(result)

    expect(result).toStrictEqual([4,6,30,899]);
  });

  it('3', function() {
    const result = mergeSortedArrays([], [4,6,30]);

    console.log(result)

    expect(result).toStrictEqual([4,6,30]);
  });

  it('4', function() {
    const result = mergeSortedArrays([], []);

    console.log(result)

    expect(result).toStrictEqual([]);
  });

  it('5', function() {
    const result = mergeSortedArrays([5], [1,7,9,12]);

    console.log(result)

    expect(result).toStrictEqual([1,5,7,9,12]);
  });

});