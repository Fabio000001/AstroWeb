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
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pokemon.map(poke => { return <Pokemon key={poke.id} pokemon={poke} /> })}
                    <Counter count={count} setCount={setCount} />
                </div>
            </div>
        </div>
    );
}

export default PokemonList;