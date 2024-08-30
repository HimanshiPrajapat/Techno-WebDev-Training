import React, { useState, useEffect } from 'react';

function Timer({ start }) {
    // Initialize the state with the start prop value
    const [time, setTime] = useState(start);

    // Effect to handle the timer countdown
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        // Clean up the interval when the component unmounts or time reaches 0
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>Time Remaining: {time} seconds</h2>
        </div>
    );
}

export default Timer;
