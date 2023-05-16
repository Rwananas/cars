import "./App.css";
import Mycars from "./components/Mycars";

function App() {
  let cars=["Ford","Fiat","Audi"]
  return (
    <div className="App">
      <Mycars cars={cars} />
      
    </div>
  );
}

export default App;
