const Pokemon = (props) => {
    const { pokemon } = props;

    return (
        <div className="max-w-sm w-full rounded-lg border border-green-300 shadow-xl bg-green-50 p-4">
            <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-full h-48 object-cover rounded-t-lg border-b-4 border-green-400"
            />
            <div className="mt-4 text-center">
                <h3 className="text-3xl font-semibold text-green-700">{pokemon.name}</h3>
                <p className="text-xl text-green-600">ID: {pokemon.id}</p>
                <p className="text-md text-green-600">Height: {pokemon.height} m</p>
                <p className="text-md text-green-600">Weight: {pokemon.weight} kg</p>
            </div>
        </div>
    );
}

export default Pokemon;