import React, { useState } from 'react';

function LikeButton({ likeCount }) {
    // Initialize the state with the passed likeCount prop
    const [count, setCount] = useState(likeCount);

    // Function to increment the like count
    const handleLike = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleLike}>Like {count}</button>
        </div>
    );
}

export default LikeButton;
