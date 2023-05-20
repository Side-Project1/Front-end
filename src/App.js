import "./App.css";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./constant/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SignUp />
      </div>
    </BrowserRouter>
  );
}

export default App;
