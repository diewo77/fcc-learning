function sumFibs(num) {
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i < num; i++) {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    var oddFib = fib.filter(function (value) {
        if (value % 2 !== 0) {
            return value
        }
    });
    var sum = 0;
    var j = 0;
    while (oddFib[j] <= num) {
        console.log(oddFib[j]);
        sum += oddFib[j];
        j++;
        console.log('sum', sum);
    }
    return sum;
}

// sumFibs(4);
// sumFibs(1000);
// sumFibs(4000000);
// sumFibs(4);
sumFibs(75024);
// sumFibs(75025);
