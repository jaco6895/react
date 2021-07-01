import './scss/style.scss';
import React from 'react';
// import './components/TodoTemplate';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <TodoTemplate>
          <TodoHead/>
          <TodoList/>
      </TodoTemplate>
    </div>
  );
}

export default App;
