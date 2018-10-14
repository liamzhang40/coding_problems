// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters(just like on the telephone buttons) is given below.Note that 1 does not map to any letters.


function letterCombinations(digits) {
    const pad = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };


    //backtrack
    const res = [];
    const _backtrack = (letters, digitsIdx) => {
        if (letters.length === digits.length) res.push(letters);

        for (let i = digitsIdx; i < digits.length; i++) {
            for (let j = 0; j < pad[digits[i]].length; j++) {
                const temp = letters;
                letters += pad[digits[i]][j];
                _backtrack(letters, i + 1);
                letters = temp;
            }
        }
    };

    if (!digits.length) return res;
    _backtrack("", 0);

    return res;
}
