// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

const integrado = [[0,1], [2,3], [4,5]]

const result_int=integrado.reduce((a,b)=> a.concat(b))
    console.log("Ejemplo 9: Concatenar varios arrays")
    console.log(result_int)

  // integrado es [0, 1, 2, 3, 4, 5]
  