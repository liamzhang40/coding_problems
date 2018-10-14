// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

function generateParentheses(pairs) {
    // const res = [];

    // const _generate = (str, open, close) => {
    //     if (open === close) {
    //         if (open + close === 2 * pairs) {
    //             res.push(str);
    //         } else {
    //             _generate(str + "(", open + 1, close);
    //         }
    //     } else if (open === pairs) {
    //         _generate(str + ")", open, close + 1);
    //     } else {
    //         _generate(str + "(", open + 1, close);
    //         _generate(str + ")", open, close + 1);
    //     }
    // };

    // _generate("", 0, 0);

    // return res;


    // backtrack

    const res = [];
    let str = "";
    
    const _backtrack = (open, close) => {
        if (open === close) {
            if (open + close === 2 * pairs) {
                res.push(str);
            } else {
                const temp = str;
                str += "(";
                _backtrack(open + 1, close);
                str = temp;
            }
        } else if (open === pairs) {
            const temp = str;
            str += ")";
            _backtrack(open, close + 1);
            str = temp;
        } else {
            const temp = str;
            str += "(";
            _backtrack(open + 1, close);
            str = temp + ")";
            _backtrack(open, close + 1);
            str = temp;
        }
    };

    _backtrack(0, 0);

    return res;
}

console.log(generateParentheses(3));