// const a=new Promise((resolve,reject)=>{
//     let success=0;
//     if(success){
//         resolve("Successful");
//     }
//     else{
//         reject("Unsuccessful");
//     }
// })

// a.then((resolve)=>{
//     console.log(resolve);
// }).catch((reject)=>{
//     console.log(reject);
// })

const arr=[];

const fetchData=((arr=[])=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push({name:"Anirban"});
            if(arr.length>0) resolve("Data Fetched");
            else reject("Some Technical issue");
        },4000)
    })
})

fetchData(arr).then((message)=>console.log(message))
.catch((message)=>console.log(message))
.finally(()=>console.log("Program Ended"));