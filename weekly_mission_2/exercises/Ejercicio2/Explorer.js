const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("Problema1")
   //1-Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   console.log("Nombre de Cada explorer")
   explorers.forEach(item => console.log(item.name))
   console.log("Problema2")
   //2-Imprime el stack de cada explorer, usa FOR EACH
   console.log("Stack de cada Explorer")
   explorers.forEach(item => console.log(item.name,item.stack))
   console.log("Problema3")
   //3-Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   const list = explorers.map((item) => item.stack )
   console.log(list)
   console.log("Problema4")
   //4-Obtén la lista de explorers que tengan en su stack "js", usa FILTER 
   //(para validar un elemento en un lista se usa el método includes)
   const explorer_js = explorers.filter(item => item.stack.includes("js"))
   console.log(explorer_js)
   //5-Busca el primer explorer que sea de la CDMX, usa FIND
   console.log("Problema5")
   const explorer_cdmx = explorers.find(item => item.city==="CDMX")
   console.log(explorer_cdmx)
   console.log("Problema6")
   //6-Obtén la suma de todos los exercises_completed, usa REDUCE
   const exercises_c = explorers.reduce((acc,item )=> acc+item.exercises_completed,0)
   console.log(exercises_c)
   console.log("Problema7")
   //7-Obtén la validación si al menos uno de los explorers tiene la 
   // propiedad exercisesFinished en frontend como true, usa SOME
   const exercises_F = explorers.some(item => item.missions.frontend.exercisesFinished === true)
   console.log(exercises_F)
   console.log("Problema8")
   //8-Obtén la validación si todos los explorers tienen la propiedad 
   // isFinished del onboarding como true. Usa EVERY.
   const is_F = explorers.every(item => item.missions.onboarding.isFinished === true)
   console.log(is_F)
   
  