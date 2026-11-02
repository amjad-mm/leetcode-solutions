var isValid = function(s) {
    let previousLength;

    do {
        previousLength = s.length;

        for (let i = 0; i < s.length - 1; i++) {
            const pair = s.substring(i, i + 2);

            if (pair === "()" ||
                pair === "{}" ||
                pair === "[]") {
                s = s.slice(0, i) + s.slice(i + 2);
                break;
            }
        }
    } while (s.length < previousLength);

    return s.length === 0;
};