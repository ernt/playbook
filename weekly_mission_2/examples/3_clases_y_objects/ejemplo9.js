// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  console.log("Ejemplo  9: Herencia entre dos clases")
  const erntDev = new Developer("Ernesto", "js", ["elixir", "groovy", "lisp"])
  console.log(erntDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const erntLaunchXDev = new LaunchXStudent("ernt", "js", ["elixir", "groovy", "lisp"])
  console.log(erntLaunchXDev)
  console.log(erntLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
  