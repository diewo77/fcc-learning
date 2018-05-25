function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    var indOf = 0;
    for (var i = 0; i < arr1.length; i++) {
        indOf = arr2.indexOf(arr1[i]);
        if (indOf !== -1) {
            newArr.push(arr1[i])
        }
    }
    // for (var j = 0; j < arr2.length; j++) {
    //     indOf = arr1.indexOf(arr2[j]);
    //     if (indOf !== -1) {
    //         newArr.push(arr2[j])
    //     }
    // }
    console.log('finish:', newArr)
    return newArr;
}

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    console.log('##########################', collection, source);
    var sourceKey = Object.keys(source);
    var theKey;
    var resultArr = [];
    for (var j = 0; j < sourceKey.length; j++) {
        theKey = sourceKey[j];
        resultArr[j] = [];
        for (var i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(theKey) && collection[i][theKey] === source[theKey]) {
                resultArr[j].push(collection[i]);
            }
        }
    }
    console.log('resultArr:', resultArr);
    if (resultArr.length > 1) {
        // for (var x = 0; x < resultArr.length; x++) {
        resultArr = diffArray(resultArr[0], resultArr[1])
        // }
    }
    // Only change code above this line
    return resultArr;
}

function whatIsInAName2(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        console.log('obj', obj);
        for(var i = 0; i < srcKeys.length; i++) {
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}


whatIsInAName2([
        {first: "Romeo", last: "Montague"},
        {first: "Mercutio", last: null},
        {first: "Tybalt", last: "Capulet"}
    ],
    {last: "Capulet"});
whatIsInAName2([{"a": 1}, {"a": 1}, {"a": 1, "b": 2}], {"a": 1});
whatIsInAName2([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2});
whatIsInAName2([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "c": 2});