import { useState, useEffect } from 'react';
import FullPokeList from './FullPokeList.js';
import './App.css';


const Home = () => {
  let [originalFullPokeList, setOriginalFullPokeList] = useState([]);
  let [pokemonData, setPokemonData] = useState([]);
  let [isPending, setIsPending] = useState(true);



  function filterPokemon(data) {
    let pokeData = data.target.value;
    let result = originalFullPokeList.filter(pokemon => pokemon.name.includes(pokeData));
    setPokemonData(result);
  }

  
  useEffect(() => {
    let urlBase = "https://pokeapi.co/api/v2/pokemon";
    let allPokemon = `${urlBase}?limit=900`;

    if(setIsPending) {
        fetch(allPokemon)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setOriginalFullPokeList(data.results);
                setPokemonData(data.results);
                setIsPending(false);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
  }, []);

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      {isPending && <div>Loading...</div>}
      {!isPending && <input type="text" placeholder="Search Pokemon..." onChange={e => filterPokemon(e)} />}
      {pokemonData && <FullPokeList theClassName="full-poke-list" fullList={ pokemonData }/>}
    </div>
  );
}

export default Home;
