class Car{
#brand;
#model;
constructor(brand , model){
    this.#brand = brand;
    this.#model = model;
}
displayInfo(){
    console.log("Brand: " + this.#brand + "\nModel: " + this.#model);
}
}
class electricCar extends Car{
    #battery;
    constructor(brand , model , battery){
        super(brand , model);
        this.#battery = battery;
    }
    displayInfo(){
        super.displayInfo()
        console.log("\n Battery: " + this.#battery);
    }
}
 const Ecar = new electricCar("BMW" , "X5 2020" , "AGM 12V");
 Ecar.displayInfo();
