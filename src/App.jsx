//import { Todo } from "./components/Todo";
 import "./app.css"
function App() {
  return (
    <div className="outterScreen">
      <div className="App">
        <h1 className="title">Todo...</h1>
        <input className="inputTitle" type="text" />
        <input className="inputBody"  type="text" placeholder="Add Task..." />
        <button className="addBtn">Add</button>
        <div className="container"> </div>
        <button className="prev">Prev</button>
      </div>
    </div>
  );
}

export default App;
