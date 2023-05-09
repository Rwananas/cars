import "./App.css";
import Cars from "./components/Cars";
import Mycars from "./components/Mycars";

function App() {
  return (
    <div className="App">
      <Mycars />
      <Cars />
    </div>
  );
}

export default App;
