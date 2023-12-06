// 1. Backspace String Compare

// Two strings are said to be the same if they are of the same length and have the same character at each index. Backspacing in a string removes the previous character in the string.
// Given two strings containing lowercase English letters and the character '#' which represents a backspace key, determine if the two final strings are equal. 
// Return 1 if they are equal or 0 if they are not. Note that backspacing an empty string results in an empty string.

function compareStrings(s1, s2) {
    function processString(s) {
        const stack = [];
        for (const char of s) {
            if (char !== '#') {
                stack.push(char);
            } else if (stack.length > 0) {
                stack.pop();
            }
        }
        return stack.join('');
    }

    const processedStr1 = processString(s1);
    const processedStr2 = processString(s2);

    return processedStr1 === processedStr2 ? 1 : 0;
}
