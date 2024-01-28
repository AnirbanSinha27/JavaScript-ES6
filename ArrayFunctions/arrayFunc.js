const arr=[1,2,3,4,5,6,7];

const result1=arr.find((value,index)=>{
    if(value>4){
        return value;
    }
});

const result2=arr.filter((value,index)=>{
    if(value>4){
        return value;
    }
});

console.log(result1);
console.log(result2);

const result3=arr.every((value,index)=>{
   return value>5;
});

const result4=arr.some((value,index)=>{
   return value>5;
});

console.log(result3,result4);