function coinChangePermutation(curr, psf, coins, target) {
    if (curr == target) {
        console.log(psf);
        return;
    }
    if (curr > target) {
        return;
    }
    for (var i = 0; i < coins.length; i++) {
        var coin = coins[i];
        coinChangePermutation(curr + coin, psf + coin + ",", coins, target);
    }
}
coinChangePermutation(0, "", [10, 50, 100, 500], 160);
