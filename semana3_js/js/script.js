// let pessoa = {
//     nome: 'Silvia',
//     idade: 34,
//     altura: 1.45,
//     andar: function() { console.log('andando') },
//     falar: () => { console.log('lalaialaia') },
//     comer: () { console.log('nham nham nham') }
// }

// classes

class Canetao {
    constructor(_marca, _cor) {
        this.marca = _marca,
            this.cor = _cor,
            this.tampada = true,
            this.escrevendo = false
    }

    // function
    escrever() {
        if (this.tampada == false) {
            console.log('Estou escrevendo');
        } else {
            console.log('ERRO:Você deve destampar antes de escrever');
        }
    }

    destampar(){
    this.tampada?this.tampada= false:console.log ('O Canetão já está sem tampa')
    }

    tampar (){
        if (this.tampada){
            console.log('Ocanetão já está com tampa')
        }else {
            this.tampada = true
            
            if(this.escrevendo){
            this.escrevendo = false;
            }
        }
    }
// MÉTODOS para acessar e alterar propriedades - esrte método retorna a marca do objeto
    getMarca(){
       return this.marca
    }

    // acessa de maneira indireta, proteje o constructor
    getCor(){
       return this.cor
    }
}

// Operador Condicional Ternário
// condicao == true ?

// LET = instância - new ... (propriedade) 
let canetao1 = new Canetao('bic', 'azul');
console.log(canetao1);

canetao1.escrever()
console.log(canetao1)
canetao1.destampar()
console.log(canetao1)
canetao1.escrever()
console.log(canetao1)
canetao1.tampar()
console.log(canetao1)

