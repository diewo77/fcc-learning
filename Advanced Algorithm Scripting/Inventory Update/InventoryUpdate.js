function updateInventory(curInv, newInv) {
    // All inventory must be accounted for or you're fired!
    for (var i = 0; i < newInv.length; i++) {
        var theElem = newInv[i];
         var found=curInv.findIndex(function(element) {
            return element[1] === theElem[1];
        });
        if (found === -1) {
            curInv.push(newInv[i])
        } else {
            curInv[found][0] += theElem[0];
        }
    }
    curInv.sort(function(a, b) {
        var textA = a[1];
        var textB = b[1];
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log(curInv)
    return curInv;
}

function updateInventory(arr1, arr2) {

    // Variable for location of product
    var index;

    // A helper method to return the index of a specified product (undefined if not found)
    var getProductIndex = function (name) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][1] === name) {
                return i;
            }
        }
        return undefined;
    }

    // For each item of the new Inventory
    for (var i = 0; i < arr2.length; i++) {

        // Invoke our helper function using arr1 as this
        index = getProductIndex.call(arr1, arr2[i][1]);

        // If the item doesn't exist
        if (index === undefined) {
            // Push the entire item
            arr1.push(arr2[i]);
        } else {
            // Add the new quantity of the current item
            arr1[index][0] += arr2[i][0];
        }

    }

    // Sort alphabetically, by the product name of each item
    arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    return arr1;
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
