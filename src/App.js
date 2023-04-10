import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Login from "./constant/Login";
import Profile from "./constant/MyPage/Profile";
import Menu from "./constant/MyPage/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
        <Menu />
        <Profile />
      </div>
    </BrowserRouter>
  );
}

export default App;
