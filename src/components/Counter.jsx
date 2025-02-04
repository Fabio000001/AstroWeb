const Counter = (props) => {
    const { count, setCount } = props;

    return (
        <div className="mt-6">
            <h2>Contador Pokemon: {count}</h2>
            <button type="button" className="bg-black text-white p-2 rounded-lg" onClick={() => setCount(count+1)}>Siguiente</button>
        </div>
    );
}

export default Counter;