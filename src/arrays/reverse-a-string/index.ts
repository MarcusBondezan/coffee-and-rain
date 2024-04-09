//Create a function that reverses a string:
//'Hi My name is Marcus' should be:
//'sucraM si eman yM iH'

export function reverse(str: string): string {
  if (!str) {
    throw new Error('Invalid input');
  }

  const reverseStr: string[] = [];

  for (let i = str.length - 1; i >= 0 ; i--) {
    reverseStr.push(str[i]);
  }

  return reverseStr.join('');
}