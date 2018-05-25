// Pig Latin
// https://www.freecodecamp.org/challenges/pig-latin

function isVowel(x) {
    if (x.match(/[aeiouAEIOU]/)) {
        return true;
    } else {
        return false;
    }
}

function translatePigLatin(str) {
    var spliced = str.split('');
    if (isVowel(spliced[0])) {
        spliced.push('way');
    } else {
        var firstLetter = spliced.shift();
        if (firstLetter == 'g') {
            firstLetter += spliced.shift();
        }
        firstLetter += 'ay';
        spliced.push(firstLetter)
    }
    str = spliced.join('');
    console.log(spliced.join(''));
    return str;
}

translatePigLatin("consonant");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");