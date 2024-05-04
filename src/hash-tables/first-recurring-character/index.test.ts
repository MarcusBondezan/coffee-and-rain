import { firstRecurringNumber } from ".";

// npx jest src/hash-tables/first-recurring-character

describe('firstRecurringNumber', function () {

  it('should return undefined for empty input', function() {
    const result = firstRecurringNumber([]);
    expect(result).toBe(undefined);
  });

  it('should return undefined for a single item input', function() {
    const result = firstRecurringNumber([2]);
    expect(result).toBe(undefined);
  });

  it('should return 2 for [2,2] input', function() {
    const result = firstRecurringNumber([2,2]);
    expect(result).toBe(2);
  });

  it('should return 2 for [2,5,1,2,3,5,1,2,4] input', function() {
    const result = firstRecurringNumber([2,5,1,2,3,5,1,2,4]);
    expect(result).toBe(2);
  });

  it('should return 1 for [2,1,1,2,3,5,1,2,4] input', function() {
    const result = firstRecurringNumber([2,1,1,2,3,5,1,2,4]);
    expect(result).toBe(1);
  });

  it('should return undefined for [2,3,4,5] input', function() {
    const result = firstRecurringNumber([2,3,4,5]);
    expect(result).toBe(undefined);
  });

});