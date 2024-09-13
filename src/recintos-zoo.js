class RecintosZoo {
  

    #recintosExistentes = [
        {numero: 1, bioma: "savana", tamanhoGeral: 10, animaisExistentes: "macaco", quantidade: 3},
        {numero: 2, bioma: "floresta", tamanhoGeral: 5, animaisExistentes: "", quantidade: 0},
        {numero: 3, bioma: "savana" && "rio", tamanhoGeral: 7, animaisExistentes: "gazela", quantidade: 1},
        {numero: 4, bioma: "rio", tamanhoGeral: 8, animaisExistentes: "", quantidade: 0},
        {numero: 5, bioma: "savana", tamanhoGeral: 9, animaisExistentes: "leão", quantidade: 1},
    ]

    #animais = [
        {especie:"leão", tamanho: 3, bioma:"savana", tipo:"carnivoro"},
        {especie:"leopardo", tamanho: 2, bioma:"savana", tipo:"carnivoro"},
        {especie:"crocodilo", tamanho: 3, bioma:"rio", tipo:"carnivoro"},
        {especie:"macaco", tamanho: 1, bioma:"savana" || "floresta", tipo:"omnivoro"},
        {especie:"gazela", tamanho: 2, bioma:"savana", tipo:"herbivoro"},
        {especie:"hipopotamo", tamanho: 4, bioma:"savana" || "rio", tipo:"herbivoro"},
    ]

    analisaRecintos(animal, quantidade) {
      
        let animalEscolhido = this.#animais.find(a => a.especie === animal)
        if(!animalEscolhido){
            console.log("animal não encontrado")
            return
        }
     
        let verificarRecinto = this.#recintosExistentes.filter(recinto => {
            return recinto.bioma == animalEscolhido.bioma  
            
        })
        this.#recintosExistentes.filter(recinto => {
            return recinto.tamanhoGeral = recinto.tamanhoGeral -quantidade 

        })
        this.#animais.filter(animal => {
            return animal.tamanho -= quantidade
        })
       
        
        for(let i = 0; i < verificarRecinto.length; i++) {
            if(verificarRecinto.length > 0) {
                console.log(`RecintoViaveis: [ recinto ${verificarRecinto[i].numero} (espaçolivre: ${verificarRecinto[i].tamanhoGeral - verificarRecinto[i].quantidade} total:${verificarRecinto[i].tamanhoGeral})]`)
            }
            
        }
        
        console.log(this.#recintosExistentes)
        console.log(this.#animais)
    }

   

}

new RecintosZoo().analisaRecintos("macaco", 1)

//export { RecintosZoo as RecintosZoo };
