// class Mulher {
//     constructor(nome,anoNascimento){
//         this._nome = nome
// this._anoNascimento = anoNascimento
//     }

//     get nome (){
//         return this._nome;
//     }

//     set nome(novo_nome){
//         this._nome = novo_nome;
//     }
// }

// let eu = new Mulher ('Ester', 1996);
// console.log(eu)


var alunas = [
    { nome:'Manu'},
    { nome:'Tha'},
    { nome:'Carol'},
];

console.log(alunas.find(aluna => {return aluna.nome === 'Carol'}))

// var aluna;
// para (var i = 0; i <alunas.length; i ++) {
//     if (alunas[i].nome === 'Carol'){
//         aluna = alunas[i];
// pausa;
//     }
// }
// console.log(aluna);

// let cadeCarol = alunas.find(aluna => {
// return aluna.nome === 'Carol';
// });

// console.log (cadeCarol);
