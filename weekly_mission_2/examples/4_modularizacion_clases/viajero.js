import Explorer from "./explorer.js";

export default class Viajero extends Explorer {
    constructor(name,username,mission,cycle){
        super(name,username,mission)
        this.cycle=cycle
    }

    getGeneralInfo(){
        let nameandUser=this.getNameAndUsername()
        return`${nameandUser},Ciclo ${this.cycle}`
    }


}