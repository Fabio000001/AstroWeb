const Pokemon = (props) => {
    const { pokemon } = props;

    return (
        <div><h3>{pokemon.name}</h3></div>
    );
}

export default Pokemon;