function initialIsCapital( word ){
    return word[0] !== word[0].toLowerCase();
}
String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

function myReplace(str, before, after) {
    var spliced = str.split(' ').map(function (value) {
        if (value == before) {
            if (initialIsCapital(value)) {
                after = after.capitalize();
            }
            return after
        }
        return value
    }).join(' ');
    console.log(spliced)
    return spliced;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("This has a spellngi error", "spellngi", "spelling")
myReplace("His name is Tom", "Tom", "john")
myReplace("Let us get back to more Coding", "Coding", "algorithms")
