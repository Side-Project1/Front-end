import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Login from "./constant/Login";
import Join from "./constant/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
        <Join />
      </div>
    </BrowserRouter>
  );
}

export default App;
