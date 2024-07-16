function isPalindrome(s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        if (s[l] != s[r])
            return false;
        l++;
        r--;
    }
    return true;
}
function printPalindromicSubstrings(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            var substr = s.substring(i, j + 1);
            if (isPalindrome(substr)) {
                console.log(substr);
            }
        }
    }
}
var s = "bcbd";
printPalindromicSubstrings(s);
