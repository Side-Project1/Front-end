import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Join from "./constant/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Join />
      </div>
    </BrowserRouter>
  );
}

export default App;
