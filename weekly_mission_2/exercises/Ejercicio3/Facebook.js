class user {
    constructor (name,age,f_color,fist_pet){
        this.name=name;
        this.age=age;
        this.f_color=f_color;
        this.fist_pet=fist_pet;

    }
    getName(){
        return `The user is  ${this.name} `
      }


}

class post {
    constructor(name,descr,likes){
        this.name=name;
        this.descr=descr;
        this.likes=likes;

    }
    getDescription(){
        return `Description:${this.descr} `
      }

}

class biography{
    constructor(title,descr,bio){
        this.title=title;
        this.descr=descr;
        this.bio=bio;
        
    }

}
const myPR1 = new post("LaunchX", "Mi primer post", 100)
console.log(myPR1.getDescription())