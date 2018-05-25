// https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-sorted-union/16077

function uniteUnique(arr) {
    var initialArr = [];
    for (var i = 0; i < arguments.length; i++) {
        initialArr.push(arguments[i]);
    }
    return initialArr.reduce(
        function(accumulator, currentValue) {
            for (var j = 0; j < currentValue.length; j++) {
                if (accumulator.indexOf(currentValue[j]) === -1) {
                    accumulator.push(currentValue[j]);
                }
            }
            return accumulator;
        },
        []
    );
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4];
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // [1, 3, 2, [5], [4]]
// uniteUnique([1, 2, 3], [5, 2, 1]); // [1, 2, 3, 5]
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8]