function pattern1(n) {
    for (var i = 1; i <= n; i++) {
        //Run n times
        //i= 1,2,3,4......n
        var currRow = "";
        for (var j = 1; j <= i; j++) {
            currRow += "*";
        }
        console.log(currRow);
    }
}
pattern1(5);
