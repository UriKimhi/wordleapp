import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Keyboard from "./componenets/keyboard";

function App() {
  return (
    <div className="App">
      <h1 className="Title">Wordle</h1> 
      <Keyboard />
      
    </div>
  );
}

export default App;
