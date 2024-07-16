

function mergeSort(arr: number[], l: number, r: number): number[] {
    if (l == r) {
        return [arr[r]];
    }
    let mid = Math.floor((l + r) / 2);
    let left = mergeSort(arr, l, mid);
    let right = mergeSort(arr, mid + 1, r);
    return merge2SortedArrays(left, right);
}

let arr = [10, 50, 20, 40, 70, 30, 10, 30, 40, 50, 80, 80, 90];
let sorted = mergeSort(arr, 0, arr.length - 1);
console.log(sorted);