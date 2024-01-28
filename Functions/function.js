function arraySum(arr){
    let result=0;
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}

let arr=[1,2,3,4,5];
let ans=arraySum(arr);
console.log(ans);