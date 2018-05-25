// https://www.freecodecamp.org/challenges/missing-letters

function fearNotLetter(str) {
    var spliced = str.split('');
    var initVal = str.charCodeAt(0);
    for (var i = 0; i < spliced.length; i++) {
        if (str.charCodeAt(i) !== initVal) {
            return String.fromCharCode(initVal)
        }
        initVal++;
    }
    return undefined;
}

console.log(fearNotLetter("abce"));