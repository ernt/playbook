export default class Pokemon{

    constructor (name){
        this.name=name
        this.count=0
    }


    sayHello() {
        this.count++
        console.log("Mi pokemon "+ this.name  + " te saluda!!!")
    }
   
}
