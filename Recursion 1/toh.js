function toh(n, s, d, h) {
    if (n == 0)
        return;
    toh(n - 1, s, h, d); //sand all the peaple avove me to my helper i can move
    console.log("Move disc", n, "from", s, d);
    toh(n - 1, h, d, s);
}
toh(4, "A", "B", "C");
