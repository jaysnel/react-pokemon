import { useState, useEffect } from 'react';

const FetchPokemon = (url) => {
    let pokemonUrl = url.url;
    let [pokemonData, setPokemonData] = useState("");
    let [isPending, setIsPending] = useState(true);

    useEffect(() => {

        fetch(pokemonUrl)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPokemonData(data);
                setIsPending(false);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [pokemonUrl]);
    
    return ( 
        <div>
            {isPending && <div>Loading...</div>}
            {
            !isPending && 
            <div>
                <img src={ pokemonData.sprites.front_default} alt={ pokemonData.name }/>
                <h1>{ pokemonData.name } </h1>
                <p className="weight">Weight: {pokemonData.weight}</p>
                <p className="height">Height: {pokemonData.height}</p>
            </div>
            }
        </div>
     );
}
 
export default FetchPokemon;