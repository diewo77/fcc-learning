function truthCheck(collection, pre) {
    // Is everyone being true?
    for (var i = 0; i < collection.length; i++) {
        console.log(collection[i][pre])
        console.log('test', collection[i].hasOwnProperty(pre) && !collection[i][pre])
        if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
            console.log(collection[i][pre])
            console.log("false")
            return false;
        }
    }
    console.log("true")
    return true;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {
//     "user": "Laa-Laa",
//     "sex": "female"
// }, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
// truthCheck([{"single": "yes"}], "single");