import './App.css';
import React, { useState, useEffect } from "react";
const App = () => {
    const [count, setCounter] = useState(0);
    
    useEffect(() => { console.log("Ejecutado:" + count);
    }, [count]);

    const add = () => {
        setCounter(count + 1);
        
    };
    const sustract = () => {
        setCounter(count - 1);
        
    };
    
    return (
        <div className="vent">
        <h2>{count}</h2>
        <button onClick={add} className="bot">+ 1</button>
        <button onClick={sustract} className="botS">- 1</button>
        </div>   
    );
};
export default App;