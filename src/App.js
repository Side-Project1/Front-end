import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Login from "./constant/Login";
import Profile from "./constant/MyPage/Profile";
import Menu from "./constant/MyPage/Menu";
import Join_First from "./constant/Join_First";
import Join_Second from "./constant/Join_Second";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
        <Join_First />
        <Join_Second />
        <Menu />
        <Profile />
     
      </div>
    </BrowserRouter>
  );
}

export default App;
