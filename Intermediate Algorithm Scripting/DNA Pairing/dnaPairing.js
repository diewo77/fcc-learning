function pairElement(str) {
    var seq = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }
    var spliced = str.split('');
    var result = [];
    for (var i = 0; i < spliced.length; i++) {
        result.push([spliced[i], seq[spliced[i]]]);
    }
    return result;
}

pairElement("GCG");