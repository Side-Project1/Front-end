import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./constant/Header";
import Login from "./constant/Login";
import Profile from "./constant/MyPage/Profile";
import Menu from "./constant/MyPage/Menu";
import Scrap from "./constant/MyPage/Scrap";
import Comment from "./constant/MyPage/Comment";
import Join_First from "./constant/Join_First";
import Join_Second from "./constant/Join_Second";
import ProfilePost from "./constant/MyPage/ProfilePost";
import MainInfo from "./constant/MainPage/MainInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainInfo />
        <ProfilePost />
        <Comment />
        <Scrap />
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
