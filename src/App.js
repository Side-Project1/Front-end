import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
