class profile {
    constructor(name,number,direction,age){
        this.name=name;
        this.number=number;
        this.direction=direction;
        this.age=age;
    }
    getInfo () {
        return `Este es su nombre ${this.name} , numero:${this.number}`
    }
}
class travel {
    constructor(t_direction,time_aprox){
        this.t_direction=t_direction;
        this.time_aprox=time_aprox;
    }
}

const myPR1 = new profile("ernt",121212,"asdad",24)
console.log(myPR1.getInfo())