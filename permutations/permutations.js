const stringPermutations = str => {
    if  (str.length === 1) return [str];
    if (str.length === 2) return [str, str[1] + str[0]];

    return str.split('').reduce((acc, letter, index) => {
        const str1 = str.slice(0, index) + str.slice(index + 1);
        const stringPerms = stringPermutations(str1);
        const mappedStringPerms = stringPerms.map(val => letter + val);
        return acc.concat(mappedStringPerms);
    }, []);
};

console.log(stringPermutations('abc'));