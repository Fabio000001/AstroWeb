const Counter = (props) => {
    const { count, setCount } = props;

    return (
        <div>
            <h2>Contador Pokemon: {count}</h2>
            <button type="button" className="" onClick={() => setCount(count+1)}>Siguiente</button>
        </div>
    );
}

export default Counter;