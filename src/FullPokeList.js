const fullPokeList = ({title, fullList, theClassName}) => {
    return (
        <div>
            <h2>{ title }</h2>
            <div className={theClassName}>
                {fullList.map((pokemon) => (
                <div className="pokemon" key={pokemon.url}>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <a href={pokemon.url}>Get Data</a>
                </div>
            ))}
            </div>
        </div>
    )
}

export default fullPokeList;