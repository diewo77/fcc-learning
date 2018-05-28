Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:
    Array.prototype.reduce()
    Symmetric Difference


Basic Code Solution:
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

Code Explanation:
    First checks if prop is equal to tracks AND if value isn’t a blank string. If both tests pass, value is pushed into the tracks array.
    If that first check doesn’t pass, it next checks only if value isn’t a blank string. If that test passes, either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
    If both these checks fail (meaning value must be an empty string), then the key (prop) is removed from the object.

