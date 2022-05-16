class Pokemon{

    constructor (name){
        this.name=name
        this.count=0
    }


    sayHello() {
        this.count++
        console.log("Mi pokemon "+ this.name  + " te saluda!!!")

    }
    sayMessage(message) {
        this.count++
        console.log("Mi pokemon "+ this.name  + " dice: "+  message)

    }

}



module.exports=Pokemon