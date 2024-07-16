function fibonacci ( n: number) : number{
    if (n == 0) return 0;
    if (n == 1) return 1;

    let fum1 = fibonacci (n-1);
    let fum2 = fibonacci (n-2);

    return fum1 + fum2 ;
}
console.log(fibonacci(8))