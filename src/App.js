import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Login from "./constant/Login";
import Profile from "./constant/MyPage/Profile";
import Menu from "./constant/MyPage/Menu";
import Join_First from "./constant/Join_First";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
        <Join_First />
        <Menu />
        <Profile />
     
      </div>
    </BrowserRouter>
  );
}

export default App;
