import React from 'react';

function ColorPicker({ onColorSelect }) {
    // Handle color selection and notify the parent component
    const handleChange = (event) => {
        onColorSelect(event.target.value);
    };

    return (
        <div>
            <label>Select Color: </label>
            <input type="color" onChange={handleChange} />
        </div>
    );
}

export default ColorPicker;
