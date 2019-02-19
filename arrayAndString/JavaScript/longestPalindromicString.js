// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

function longestPalindromicString(string) {
    // O(n^3) Time O(n) Space
    //     let longest = null;
    //     for (let i = 0; i < string.length - 1; i++) {
    //         for (let j = i + 1; j < string.length; j++) {
    //             const current = string.slice(i, j + 1);
    //             if (parlindrome(current) && (longest === null || (j - i + 1) > longest.length)) {
    //                 longest = current;
    //             }
    //         }
    //     }
    //     return longest ? longest : string[0];
    // };

    // function parlindrome (string) {
    //     for (let i = 0; i < string.length / 2; i++) {
    //         if (string[i] !== string[string.length - 1 - i]) return false;
    //     }

    //     return true;
    // };


    // O(n^2) Time O(n) Space
    // let res = "";

    // for (let i = 0; i < string.length - 1; i++) {
    //     const oddString = expandFromCenter(i, i);
    //     const evenString = expandFromCenter(i, i + 1);
    //     const newPalindrome = oddString.length > evenString.length ? oddString : evenString;
    //     res = newPalindrome.length > res.length ? newPalindrome : res;
    // }

    // function expandFromCenter(l, r) {
    //     while(l >= 0 && r < string.length && string[l] === string[r]) {
    //         l--;
    //         r++;
    //     }

    //     return string.slice(l + 1, r);
    // }
    
    // return res;


    let start = 0;
    let end = 0;

    for (let i = 0; i < string.length - 1; i++) {
        const oddLengthRange = expandFromCenter(i, i);
        const evenLengthRange = expandFromCenter(i, i + 1);
        const oddLength = oddLengthRange[1] - oddLengthRange[0];
        const evenLength = evenLengthRange[1] - evenLengthRange[0];
        const largerRange = oddLength > evenLength ? oddLengthRange : evenLengthRange;
        
        if (largerRange[1] - largerRange[0] > end - start) {
            start = largerRange[0];
            end = largerRange[1];
        }
    }

    function expandFromCenter(l, r) {
        while(l >= 0 && r < string.length && string[l] === string[r]) {
            l--;
            r++;
        }
        return [l + 1, r];
    }

    return string.slice(start, end);
}

console.log(longestPalindromicString("babadcccc"));