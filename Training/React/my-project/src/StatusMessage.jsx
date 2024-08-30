import React from 'react';

function StatusMessage({ status }) {
    let message;

    if (status === 'success') {
        message = 'Operation was successful';
    } else if (status === 'error') {
        message = 'There was an error';
    } else {
        message = 'Status unknown';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default StatusMessage;
