import React from 'react';

const ListItem = ({ task, handleChange }) => {
    return (
        <input className="list-item" value={task} onChange={handleChange} />
    );
}

export default ListItem;