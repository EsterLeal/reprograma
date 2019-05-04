const data = [{
    "name": "Bulbasaur",
    "image_url": "http://pokeapi.co/media/img/1.png",
    "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "types": ["poison", "grass"]
},
{
    "name": "Ivysaur",
    "image_url": "http://pokeapi.co/media/img/2.png",
    "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.  There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    "types": ["poison", "grass"]
},
{
    "name": "Venusaur",
    "image_url": "http://pokeapi.co/media/img/3.png",
    "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.  There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    "types": ["poison", "grass"]
},
{
    "name": "Charmander",
    "image_url": "http://pokeapi.co/media/img/4.png",
    "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.  The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "types": ["fire"]
},
{
    "name": "Charmeleon",
    "image_url": "http://pokeapi.co/media/img/5.png",
    "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.  Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    "types": ["fire"]
}]

const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('Class', 'container');
app.appendChild (container);

for (i=0; i<data.length; i++){
    let personagens = data[i];
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const titulo = document.createElement('h1');
    titulo.textContent = personagens.name;

    const imagem = document.createElement('img');
    imagem.src = personagens.art_url;
 
    const paragrafo = document.createElement('p');
    personagens.description = personagens.description;
    paragrafo.textContent = personagens.description;

    container.appendChild(card);
    card.appendChild(titulo);
    card.appendChild(imagem);
    card.appendChild(paragrafo);
}

// data.forEach(pokemon => {
//     let card = document.createElement('div'); 
//     card.setAttribute('class', 'card'); 
//     container.appendChild(card);

//     let titulo = document.createElement('h1');
//     titulo.innerHTML = pokemon.name;
//     card.appendChild(titulo);

//     let descricao = document.createElement('p');
//     descricao.innerHTML = pokemon.descricao;
//     card.appendChild(descricao);

//     let image = document.createElement('img');
//     image.setAttribute('src', 'pokemon.art_url');
//     titulo.appendChild(image);

//     let tipo = document.createElement('p');
//     if (pokemon.types.length>1){
//     tipo.innerHTML = 'type:' + pokemon.types[0] + 'e' + pokemon.types[1]
//     }else{
//         tipo.innerHTML = 'type:' + pokemon.types[0]  
//     }
//     titulo.appendChild(tipo);


// })