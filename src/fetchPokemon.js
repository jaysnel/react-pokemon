import { useState, useEffect } from 'react';

const FetchPokemon = (url) => {
    let pokemonUrl = url.url;
    const [pokemonData, setPokemonData] = useState("");

    useEffect(() => {

        fetch(pokemonUrl)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPokemonData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [pokemonUrl]);
    console.log(pokemonData)
    return ( 
        <div>
            <h1>{ pokemonData.name } </h1>
            <p className="weight">Weight: {pokemonData.weight}</p>
            <p className="height">Height: {pokemonData.height}</p>
        </div>
     );
}
 
export default FetchPokemon;