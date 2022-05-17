

// Ejemplo 4: Objeto con métodos
const perrito ={
    name: "Aquiles",
    saywoof: function(){
        console.log(`${this.name} te dice woof ` )
    }
}
console.log ("Este es el Ejemplo 4")
perrito.saywoof()