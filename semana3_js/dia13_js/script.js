// class Pessoa {
//     constructor(_nome,_idade){
//         this.nome = _nome,
//         this.idade = _idade
//     }
    
// // este método só será acessível se eu instanciar esta classe
//     programar(){
//         console.log('Estou codando loucamente hahahahhahaha');
//     }

// }

// let mulherMaravilhosa = new Pessoa ('Ester', 23)
// console.log(mulherMaravilhosa)

// Classe MÃE

class Animal {
    constructor (_especie,_nome,_somEmitido){
        this.especie = _especie,
        this.nome = _nome,
        this.somEmitido = _somEmitido
    }

    come(){console.log('Nham nham')}

}

// propriedade fica dentro do constructor, o método NÃO.

// classe FILHA

class Cachorro extends Animal {
    constructor(_especie,_nome,_somEmitido,_raca) {
        super(_especie,_nome,_somEmitido)
        this.raca = _raca
    }
    latir(){console.log('Au au au au')}
}

let peralta = new Cachorro ('Filhote', 'Peralta', 'Au au', 'Labrador')


