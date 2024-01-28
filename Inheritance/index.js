class Electronics{
    #input;
    #output;
    #name;

    constructor(input,output,name){
        this.#input=input;
        this.#output=output;
        this.#name=name;
    }

    get getInput(){
        console.log(this.#input);
    }

    set setOutput(output){
        this.#output=output;
    }

    print(){
        console.log(this.#name);
    }
}

class HardDisk extends Electronics{
    #rpm;
    constructor(input,output,name,rpm){
        super(input,output,name);
        this.#rpm=rpm;
    }

    printRPM(){
        console.log(this.#rpm);
    }
}

const fan=new Electronics(120,220,"Hero Fan");
const wbd=new HardDisk(400,800,"WBD",7200);
wbd.print();
wbd.printRPM();

fan.getInput;
fan.setOutput=250;