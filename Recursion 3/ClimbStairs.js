function func(curr, psf, n) {
    if (curr == n) {
        console.log(psf);
        return;
    }
    if (curr > n)
        return;
    //1 jump
    func(curr + 1, psf + 1, n);
    //2 jump
    func(curr + 2, psf + 2, n);
    //3 jump
    func(curr + 3, psf + 3, n);
}
func(0, "", 5);
