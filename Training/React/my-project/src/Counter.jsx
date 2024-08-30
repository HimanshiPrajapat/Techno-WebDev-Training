import React, { useState } from 'react';

function Counter() {
    // Declare a state variable 'count' and a function 'setCount' to update it
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
