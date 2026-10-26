const removeAnagrams = words => {
    const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    
    const normal = s => {
        let res = 1;
        for (let i = 0; i < s.length; i++)
            res *= primes[s.charCodeAt(i) - 97];
        return res;
    }

    const res = [words[0]];
    let prev = normal(words[0]);

    for (let i = 1; i < words.length; i++) {
        const key = normal(words[i]);
        if (key !== prev) {
            res.push(words[i]);
            prev = key;
        }
    }

    return res;
};