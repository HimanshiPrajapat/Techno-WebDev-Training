import React, { useState } from 'react';

function TextInput({ onValueChange }) {
    // Initialize the state for the input value
    const [inputValue, setInputValue] = useState('');

    // Handle input changes
    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue); // Update local state
        onValueChange(newValue); // Pass the value to the parent
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Type something..." 
            />
        </div>
    );
}

export default TextInput;
