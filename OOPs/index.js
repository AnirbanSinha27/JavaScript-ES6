//way 1 of creating object
const a={
    name:"Anirban",
    age:19,
}

console.log(a);

//way 2 of creating obejct (Factory Function)
function Hero(a,b){
    return{
        weight:a,
        height:b,
    };
}

const ironMan=Hero(50,110);
console.log(ironMan);

//way 3 of creating object (Constructor Function)
function Star(a,b){
    this.weight=a;
    this.height=b;
}

const Hero1=new Star(55,185);
console.log(Hero1);


//Spread  Operator
const ironMan2={
    ...ironMan,
    quote:"Hi I am Ironman2"
}

console.log(ironMan2);
