import { reverse } from ".";

test('reverse a string successfully', function() {
  const result = reverse('Testing reverse!');
  expect(result).toBe('!esrever gnitseT');
});

test('throws an error if the input str is empty', function() {
  expect(() => reverse('')).toThrow('Invalid input');
});