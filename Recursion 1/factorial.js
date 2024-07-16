function factorial(n) {
    if (n == 0)
        return 1;
    var nm1Fact = factorial(n - 1);
    return n * nm1Fact;
}
console.log(factorial(5));
