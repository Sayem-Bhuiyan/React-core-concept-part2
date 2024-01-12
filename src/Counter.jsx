import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const disHandleClick = () => {
        const newDis = count -1;
        setCount(newDis)
    }
    return(
        <div style={{
            border: '2px solid yellow',
            padding: '15px',
            margin: '20px'
        }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick} style={{
                marginRight: '15px'
            }}>Add</button>
            <button onClick={disHandleClick}>Reduce</button>
        </div>
    );
}
export default Counter;