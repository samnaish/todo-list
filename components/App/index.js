import React, {useState} from 'react';
import Header from '../Header/index';
import List from '../List/index';
import Input from '../Input/index';

import './style';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [done, setDone] = useState([]);

    const updateTodoAtIndex = (event, index) => {
        const newTodos = [...todos];
        newTodos[index].task = event.target.value;
        setTodos(newTodos);
    }

    const markAsDone = (index) => {
        const doneTodo = todos[index];
        const newDone = [doneTodo, ...done];
        const newTodos = todos.filter((item, currentIndex) => {
            return index !== currentIndex;
        });
        setDone(newDone);
        setTodos(newTodos);
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newTodos = [...todos, { task: event.target.value }];
            setTodos(newTodos);
        }
    }

    return (
        <div className="app">
            <Header title="To-Do List"/>
            <input placeholder="type here" onKeyDown={ event => handleKeyDown(event) }/>
            <div className="app__list-container">
                <List heading="To Do" todos={todos} actions={{ 
                    onChange: updateTodoAtIndex, 
                    onDelete: removeTodo, 
                    onDone: markAsDone
                }} />
                <List heading="Done" todos={done}/>   
            </div>
        </div>
    );
}

export default App;