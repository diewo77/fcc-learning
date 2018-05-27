// todo figure out how to not remove the - in the beginning and match for it after that ( easier then testing for negative numbers )
function telephoneCheck(str) {
    // Good luck!

    console.log(str);
    // Replace space and underscore with -
    str = str.replace(/([^()]+)([-()\s])/g, '');
    if (str.match(/^[+]?\d+([.]\d+)?$/g)) {
        console.log(str);
        str = str.split('');
        console.log(str);
        return str.length === 10 || (str.length === 11 && str[0] == 1);
    }
    return false;
}
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("555)-555-5555");
// telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
// telephoneCheck("1 (555) 555-5555");
// telephoneCheck("5555555555");
// telephoneCheck("555-555-5555");
// telephoneCheck("(555)555-5555");
// telephoneCheck("1(555)555-5555");