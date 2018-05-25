Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects

Basic Code Solution:
function booWho(bool) {
  return typeof bool === 'boolean';
}

// test here
booWho(null);