const url="https://catfact.ninja/fact";

const fetchData=async ()=>{

    console.log("a");

    try {
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

fetchData();

console.log("z");