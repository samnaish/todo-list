import React from 'react';
import ListItem from '../ListItem';

import './style.css';

const List = ({ heading, todos = [], actions = {} }) => {
    return (
        <div className="list">
            <div className="list__heading-container">
                <h2 className="list__heading">{heading}</h2>
                </div>
            <div className="list__items">
                {
                    todos.map((todo, index) => {
                        return (
                            <div className="list__item" key={index}>
                                <ListItem task={todo.task} handleChange={(event) => actions.onChange(event, index)} />
                                {
                                    actions.onDone && <button className="list__button" type="button" onClick={() => actions.onDone(index)} >Mark as Done</button>
                                }
                                {
                                    actions.onDelete && <button className="list__button" type="button" onClick={() => actions.onDelete(index)}>Delete</button>
                                }
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    );
}

export default List;