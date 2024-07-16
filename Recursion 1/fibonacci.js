function fibonacci(n) {
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    var fum1 = fibonacci(n - 1);
    var fum2 = fibonacci(n - 2);
    return fum1 + fum2;
}
console.log(fibonacci(8));
