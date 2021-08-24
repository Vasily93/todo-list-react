import './App.css';
import ToDoList from './TodoList';
import NewToDoForm from './NewToDoForm';

function App() {
  return (
    <div className="App">
      <h1>To Do List with React</h1>
      <ToDoList/>
      <NewToDoForm/>
    </div>
  );
}

export default App;
