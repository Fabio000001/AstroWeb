import Counter from "./Counter";
import Pokemon from "../components/Pokemon";
import { useState, useEffect } from "react";

const PokemonList = () => {
    const [count, setCount] = useState(1);
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchData(id) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            console.log(data);
            if (data) setPokemon([...pokemon,
            {
                id: data.id,
                name: data.name,
                height: data.height,
                weight: data.weight,
                image: data.sprites.front_default
            }]);
        }
        fetchData(count);
    }, [count]);

    return (
        <div>
            <h1>Lista de pokemon</h1>
            {pokemon.map(poke => { return <Pokemon key={poke.id} pokemon={poke} /> })}
            <Counter count={count} setCount={setCount} />
        </div>
    );
}

export default PokemonList;