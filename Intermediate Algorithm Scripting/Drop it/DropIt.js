function dropElements(arr, func) {
    // drop them elements.
    var leng = arr.length;
    for (var i = 0; i < leng; i++) {
        if (func(arr[0])) {
            console.log(arr[0])
            break;
        } else {
            arr.shift();
        }
    }
    console.log(arr)
    return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
// dropElements([1, 2, 3], function (n) {
//     return n < 3;
// });
// dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
// });
