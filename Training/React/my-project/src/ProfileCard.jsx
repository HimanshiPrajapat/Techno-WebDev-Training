import React from 'react';
import './ProfileCard.css'; // Optional: for styling

function ProfileCard({ name, age, location }) {
    return (
        <div className="profile-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
}

export default ProfileCard;
