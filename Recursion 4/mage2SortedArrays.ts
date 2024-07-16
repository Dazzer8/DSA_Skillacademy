function margeSortedArrays (nums1:number[],m: number, nums2 :number[],n:number ) {
    let ans: number[] = [];
    let i = 0;
    let j = 0;

    while(i<nums1.length && j< nums2.length){
        if(nums1[i]<nums2[j]){
            ans.push(nums1[i]);
            i++;
        }else{
            ans.push(nume2[j]);
            j++;
        }
    }
    if(i == nums1.length){
         while(j< nums2.length){
            ans.push(nume2[j]);
            j++;
    }else{
          while(j< nums2.length){
           ans.push(nume2[i]);
            i++;
            }
            
        
        }

    }
}