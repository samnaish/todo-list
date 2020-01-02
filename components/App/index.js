import React, {useState} from 'react';
import Header from '../Header/index';
import List from '../List/index';

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

    const removeDone = (index) => {
        // get and spread dones and save in new array
        const newDone = [...done];
        // selected done will be removed from the newDone array and only the one selected
        newDone.splice(index, 1);
        // set the new state to existing array
        setDone(newDone);
    }

    const removeTodo = (index) => {
        // get and spread todos and save in new array
        const newTodos = [...todos];
        // selected todo will be removed from the newtodos array and only the one selected
        newTodos.splice(index, 1);
        // set the new state to existing array
        setTodos(newTodos);
      };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newTodos = [...todos, { task: event.target.value }];
            event.target.value = '';
            setTodos(newTodos);
        }
    }

    return (
        <div className="app">
            <Header title="To-Do List"/>
            <input className="app__input" type="text" placeholder="type here" onKeyDown={ event => handleKeyDown(event) }/>
            <div className="app__list-container">
                <List heading="To Do" todos={todos} actions={{ 
                    onChange: updateTodoAtIndex, 
                    onDelete: removeTodo, 
                    onDone: markAsDone
                }} />
                <List heading="Done" todos={done} actions={{
                    onDelete: removeDone
                }}/>   
            </div>
        </div>
    );
}

export default App;