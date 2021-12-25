import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    
   //const [data, setData]

   
//     const addOne = () => {
//         if(count < 10){
//             setCount(count+1)
//         } 
//     };
//     const subOne = () => {
//         setCount(count-1)
//     }

//   return (
//     <div className="App">
//         <h3>Counter: {count}</h3>
//         <button onClick={addOne}>Add 1</button>
//         <button onClick={subOne}>Remove 1</button>
      
//     </div>
const changeCount = (value) => {
        // setCount(count + value)
        setCount((prev) => {
            if(prev === 10 || prev === -10){
                return 0
            }
            return prev + value
        })
};
const Double = () => {
            setCount(count*2)
        }
const Divid = () => {
    setCount(count/2)
}

    // if(count > 10){
    //     return <h1>Counter Reached max Value</h1>
    // }
    // if(count < -10){
    //     return <h1>Counter Reached min Value</h1>
    // }

    const changeScore = (value) => {
        // setScore(Score + value)
        setScore((prev) => {
            if(prev === 10 || prev === -10){
                return 0
            }
            return prev + value
        })
};
return (
<div className="App">
    <h3 className='heading'>Counter: {count}</h3>
    {/* {count ===10  && (
        <div>
            <button onClick={() => changeCount(1)}>Add 1</button>
            <button onClick={() => changeCount(-1)}>Sub 1</button>
        </div>
    )} */}
    <div>
            <button onClick={() => changeCount(1)}>Add 1</button>
            <button onClick={() => changeCount(-1)}>Reduce 1</button>
            <button onClick={Double}>Double</button>
            <button onClick={Divid}>Half</button>

            <div>Counter is {count % 2 === 0? "Even": "Odd"}</div>
        </div>


    <form>{score}</form>
    <input type="number" name="input" id="input_id" />
    <div>
            <button onClick={() => changeScore(1)}>Add 1</button>
            <button onClick={() => changeScore(-1)}>Reduce 1</button>
    </div>
</div>
  );
}

export default App;
