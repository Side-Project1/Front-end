import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Profile from "./constant/MyPage/Profile";
import Menu from "./constant/MyPage/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Profile />
      </div>
    </BrowserRouter>
  );
}

export default App;
