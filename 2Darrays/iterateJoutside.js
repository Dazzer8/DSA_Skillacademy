function iterate(arr) {
    for (var j = 0; j < arr[0].length; j++) {
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log([i][j]);
        }
    }
}
var a = [
    [2, 3, 6, 2],
    [1, 4, 3, 7],
    [3, 2, 9, 5],
];
iterate(a);
