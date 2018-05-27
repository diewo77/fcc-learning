function addTogether() {
    if (arguments.length > 1) {
        var initialArr = [];
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === "number") {
                initialArr.push(arguments[i]);
            } else {
                return undefined;
            }
        }
        return initialArr.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        })
    } else {
        var c = arguments[0];

        // Check the number again, must be outside the function to about returning an object
        // instead of undefined.
        if (typeof c === 'number') {
            // Return function that expect a second argument.
            return function (arg2) {
                // Check for non-numbers
                if (c === undefined || typeof arg2 !== 'number') {
                    return undefined;
                } else {
                    // if numbers then add them.
                    return c + arg2;
                }
            };
        }
    }
}

addTogether(2, 3);
addTogether("http://bit.ly/IqT6zt")
addTogether(2)(3);


