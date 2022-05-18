
class user {
    constructor(name,username,age,bio,location){
        this.name=name;
        this.username=username;
        this.age=age;
        this.bio=bio;
        this.location=location;
        this.birth_date= new Date();
    }

    getInfo(){
        return `${this.username} tengo ${this.age} y mi cumple es ${this.birth_date}`
    }
}

class trending_topic  {
    constructor(trending){
        this.trending= trending;
    }


}

class hashtag  {
    constructor (name){
        this.name=name;
        this.date= new Date();
    }
    
    }

    const myPR1 = new user("ernesto","ernt",24, "Mi Primer PR","aasdasd")
    console.log(myPR1.getInfo())