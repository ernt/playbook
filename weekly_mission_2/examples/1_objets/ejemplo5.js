
// Ejemplo 5: Objeto con método que recibe parámetros

const perrito2={
    name:"Ento",
    sayHellotoMyPet: function(yourPet){
        console.log(`${this.name} dice, como estas ${yourPet}`)
    }
}

console.log ("Este es el Ejemplo 5")
perrito2.sayHellotoMyPet("Otis")