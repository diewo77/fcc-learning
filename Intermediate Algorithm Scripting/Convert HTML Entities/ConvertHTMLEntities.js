function convertHTML(str) {
    function forHTML(cor, dec, c) {
        return html[str[c]];
    }
    // &colon;&rpar;
    var html = {
        '&': '&amp;',
        '>': '&gt;',
        '<': '&lt;',
        '"': '&quot;',
        '\'': '&apos;'
    }
    str = str.replace(/([&'"<>])/mg, forHTML);
    return str;
}

convertHTML("Dolce & Gabbana");