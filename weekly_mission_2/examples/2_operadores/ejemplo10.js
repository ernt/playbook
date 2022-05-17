
// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

const names10_E = ['Axplorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr_E = names10_E.every((name) => name.startsWith('E') ) // every

console.log("Ejemplo 10: Son todos los nombres Empiezan con E: " + areAllStr_E)