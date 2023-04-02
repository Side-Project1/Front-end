import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Login from "./constant/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
