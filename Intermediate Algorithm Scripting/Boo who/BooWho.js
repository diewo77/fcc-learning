// https://www.freecodecamp.org/challenges/boo-who

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return bool === true || bool === false;
}

booWho(null);
booWho([1, 2, 3]);
booWho([].slice);
booWho({"a": 1});
booWho(1);