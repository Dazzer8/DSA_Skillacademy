function allSunSequences(i, asf, arr) {
    if (i == arr.length) {
        console.log(asf);
        return;
    }
    //pick
    allSunSequences(i + 1, asf + arr[i] + ",", arr);
    //not pick
    allSunSequences(i + 1, asf, arr);
}
allSunSequences(0, "", [10, 20, 30]);
