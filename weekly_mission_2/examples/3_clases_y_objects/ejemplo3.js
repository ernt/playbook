 class Pet{
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }


  let otispet = new Pet("Otis", 7, ["Elote", "Esquites"])
  console.log("Ejemplo 3: Instanciar un objeto con atributos")
  console.log(otispet)