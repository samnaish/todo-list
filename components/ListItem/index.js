import React from 'react';

import './style.css';

const ListItem = ({ task, handleChange }) => {
    return (
        <input className="list-item" value={task} onChange={handleChange} />
    );
}

export default ListItem;