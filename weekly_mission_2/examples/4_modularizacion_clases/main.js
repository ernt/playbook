import Viajero from "./viajero.js";

const viajero = new Viajero ("Ernesto","LaunchX","NodeJS","Abril 2022")
console.log(viajero)
console.log(viajero.getNameAndUsername()) // Método de la clase padre
console.log(viajero.getGeneralInfo()) //// Método de la clase hija