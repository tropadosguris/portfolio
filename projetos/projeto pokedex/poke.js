const pokemonName = document.querySelector(".pokemon_name");

const pokemonNumber = document.querySelector(".pokemon_number");

const pokemonImage = document.querySelector(".pokemon_image");

const form = document.querySelector(".form");

const input = document.querySelector(".input");

const buttonPrev = document.querySelector(".btn-prev");

const buttonNext = document.querySelector(".btn-next");



// conectar com api

const fetchPokemon = async (pokemon) => {

   const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

   if (APIResponse.status === 200) {
      const data = await APIResponse.json();

      return data;
   }

};


// RENDERIZAR OS DADOS DA API 

const renderPokemon = async (pokemon) => {

   const data = await fetchPokemon(pokemon);

   if (data) {

      pokemonNumber.innerHTML = data.id;

      pokemonName.textContent = data.name;
   
      pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
   
      input.value = "";
   
      console.log(data);

      
   } else {
      pokemonName.textContent = "Não encotrado.";
      pokemonNumber.innerHTML = ""
   }


};

form.addEventListener("submit", (event) => {
   event.preventDefault();

   renderPokemon(input.value.toLowerCase());

   
});