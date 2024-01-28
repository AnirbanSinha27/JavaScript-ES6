const arr=[1,2,3,4,5];

// function calculatorMultipy(arr=[]){
//     const ans=[];
//     for(let i=0;i<arr.length;i++){
//         const element=arr[i]*10;
//         ans.push(element);
//     }
//     console.log(ans);
// }

// calculatorMultipy(arr);

// function calculatorDivide(arr=[]){
//     const ans=[];
//     for(let i=0;i<arr.length;i++){
//         const element=arr[i]/10;
//         ans.push(element);
//     }
//     console.log(ans);
// }

// calculatorDivide(arr);

function calculator(arr=[],callback){
    const ans=[];
    for(let i=0;i<arr.length;i++){
        const element=callback(arr[i]);
        ans.push(element);
    }
    console.log(ans);
}

calculator(arr,(i)=>i*10);
calculator(arr,(i)=>{
    return i/10});

