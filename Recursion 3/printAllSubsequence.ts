function allSunSequences(i,asf:string, arr:number[]) : void{
    if(i == arr.length){
        console.log(asf);
        return;
    }
    //pick
    allSunSequences(i+1,asf+arr[i]+",",arr);
    //not pick
    allSunSequences(i+1,asf,arr);
}
allSunSequences(0,"",[10,20,30]);