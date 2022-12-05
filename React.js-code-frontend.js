const App = () => {
  const [count,setCount] = React.useState(0);
      const inc=()=>{
        setCount(count+1)
      }
      const dec=()=>{
        setCount(count-1)
      }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
