function iterAdd(arr, toAdd) {
    for (var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            iterAdd(arr[i], toAdd)
        } else {
            toAdd.push(arr[i])
        }
    }
    return toAdd
}

function steamrollArray(arr) {
    // I'm a steamroller, baby
    var newOne = [];
    return iterAdd(arr, newOne);
}

steamrollArray([1, [2], [3, [[4]]]]);