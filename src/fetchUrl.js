// import { useState, useEffect } from 'react';

// const Fetchurl = ({url, title, fullList, theClassName}) => {
//     let [originalFullPokeList, setOriginalFullPokeList] = useState([]);
//     let [pokemonData, setPokemonData] = useState([]);
//     let [isPending, setIsPending] = useState(true);


//     useEffect(() => {

//         if(setIsPending) {
//             fetch(url)
//                 .then(res => {
//                     return res.json();
//                 })
//                 .then(data => {
//                     setOriginalFullPokeList(data.results);
//                     setPokemonData(data.results);
//                     setIsPending(false);
//                 })
//                 .catch((err) => {
//                     console.log(err.message);
//                 })
//         }
//       }, [url]);

//     return ( 
//         <div>
//             <h2>{ title }</h2>
//             <div className={theClassName}>
//                 {fullList.map((pokemon) => (
//                 <div className="pokemon" key={pokemon.url}>
//                     <h1>{pokemon.name.toUpperCase()}</h1>
//                     <a href={pokemon.url}>Get Data</a>
//                 </div>
//             ))}
//             </div>
//         </div>
//      );
// }
 
// export default Fetchurl;