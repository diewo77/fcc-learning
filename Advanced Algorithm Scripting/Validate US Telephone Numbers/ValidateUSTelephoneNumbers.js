// Using the regex is the solution
// todo need to learn more about regex, it will be helpful

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
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