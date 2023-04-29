import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Login from "./constant/Login";
import Profile from "./constant/MyPage/Profile";
import Menu from "./constant/MyPage/Menu";
import Scrap from "./constant/MyPage/Scrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Scrap />
        <Header />
        <Login />
        <Menu />
        <Profile />
      </div>
    </BrowserRouter>
  );
}

export default App;
