import React, {Component} from 'react';

const DropWrapper = ({ onDrop, children, status }) => {
    const allowDrop = e => e.preventDefault();
    const handleDrop = e => {
        const data = JSON.parse(e.dataTransfer.getData("item"));
        onDrop(data, status);
    }

    return(
        <div onDropOver={allowDrop} onDrop={handleDrop} className="drop-wrapper">
            {children}
        </div>
    )
};

export default DropWrapper;