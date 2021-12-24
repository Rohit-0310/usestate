import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(10);
    
   //const [data, setData]
    const addOne = () => {
        setCount(count+1)
    }
    const subOne = () => {
        setCount(count-1)
    }

  return (
    <div className="App">
        <h3>Counter: {count}</h3>
        <button onClick={addOne}>Add 1</button>
        <button onClick={subOne}>Remove 1</button>
      
    </div>
  );
}

export default App;
