import React from "react";
import './scss/style.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';

const App = () => {
    return
    <TodoTemplate>
        <TodoInsert />
    </TodoTemplate>;
};

export default App;
