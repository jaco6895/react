import React from "react";
import './scss/style.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
    return(
        <TodoTemplate>
            <TodoInsert/>
            <TodoList/>
        </TodoTemplate>
    );
};

export default App;
