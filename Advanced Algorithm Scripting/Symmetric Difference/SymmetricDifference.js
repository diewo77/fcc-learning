function sym(args) {
    var theArr = [];
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        theArr = theArr.concat(a.filter(function (item, pos) {
            return a.indexOf(item) === pos;
        }))
    }
    var unique_array = theArr.sort(function (a, b) {
        return a - b;
    });
    var countDup = {};
    for (var j = 0; j < unique_array.length; j++) {
        var arrayElement = unique_array[j];
        if (!countDup.hasOwnProperty(arrayElement)) {
            countDup[arrayElement] = 0;
        }
        countDup[arrayElement] += 1;
    }

    var objKeys = Object.keys(countDup);
    for (var s = 0; s < objKeys.length; s++) {
        if (countDup[objKeys[s]] === 1 || countDup[objKeys[s]] >= 3) {
            result.push(parseInt(objKeys[s]));
        }
    }
    return result;
}

// sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);


/*

    var theArr = [];
    for (var i = 0; i < arguments.length; i++) {
        theArr.push(arguments[i]);
    }
    function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return theArr.reduce(symDiff);
 */