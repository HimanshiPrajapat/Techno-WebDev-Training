import React from 'react';

function ToggleSwitch({ toggleState }) {
    return (
        <div>
            <button onClick={toggleState}>Toggle</button>
        </div>
    );
}

export default ToggleSwitch;
