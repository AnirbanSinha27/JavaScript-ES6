const url="https://catfact.ninja/fact";

const fetchData=()=>{
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch(()=>{
        console.log("Technical issue");
    })
    .finally(()=>{
        console.log("Done");
    })
}

fetchData();