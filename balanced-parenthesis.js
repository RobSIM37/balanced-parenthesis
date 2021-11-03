function balancedParenthesis(str) {

    let tracker = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] === '(') {
            tracker++;
        } else if (str[i] === ')') {
            tracker--;
        }

        if (tracker === -1) return false;
    }

    return tracker === 0;

}

console.log(balancedParenthesis('This is (as expected) balanced'));
console.log(balancedParenthesis('This is ((not) balanced'));
console.log(balancedParenthesis('This has the (fifth) paren(s) out of order)('))
console.log(balancedParenthesis('This has no parens at all'))