function sumAll(arr) {
    var min = arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    var result = 0;
    for (var i = min; i <= max; i++) {
        result += i;
    }
    return result
}


sumAll([1, 4]);
