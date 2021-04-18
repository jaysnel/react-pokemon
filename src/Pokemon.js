import { useParams } from "react-router";
import FetchPokemon from './fetchPokemon.js';

const Pokemon = () => {
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return ( 
        <div>
            {FetchPokemon && <FetchPokemon url={url}/>}
        </div>
     );
}
 
export default Pokemon;