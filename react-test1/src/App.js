import logo from './logo.svg';
import './scss/style.scss';

import './components/TodoTemplate';
import TodoTemplate from "./components/TodoTemplate";
//https://react.vlpt.us/mashup-todolist/01-create-components.html
function App() {
  return (
    <div className="App">
      <TodoTemplate>안녕하세요.</TodoTemplate>
    </div>
  );
}

export default App;
