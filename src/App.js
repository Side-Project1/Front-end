import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import GlobalStyle from "./components/common/globalstyle";
import Community from "./constant/commuintyPage/Community";
import MainHeader from "./components/common/Header/header";
import { useState } from "react";
import AfterHeader from "./components/common/Header/AfterHeader";
import PromotionDetailPage from "./constant/promotionPage/PromotionDetailPage";
import Study from "./constant/StudyPage/Study";
import StudyDetailPage from "./constant/StudyPage/StudyDetailPage";
import StudyForm from "./constant/StudyPage/StudyForm";
import Promotion from "./constant/promotionPage/Promotion";
import PromotionForm from "./constant/promotionPage/PromotionForm";
import Login from "./constant/Login";
import SignUp from "./constant/SignUp";
import MainPage from "./constant/MainPage/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      {/* <GlobalStyle /> */}
      <Router>
        <div style={{ zIndex: 1, position: "relative" }}>
          {isLoggedIn ? (
            <AfterHeader onLogin={handleLogin} />
          ) : (
            <MainHeader onLogout={handleLogout} />
          )}
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/community" element={<Community />} />
          {/* <Route path="/job" element={<Job />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* <Route path="/form" element={<Form />} /> */}
          <Route path="/Study" element={<Study />} />
          <Route path="/Studyform" element={<StudyForm />} />
          <Route path="/Promotion" element={<Promotion />} />
          <Route path="/promotionform" element={<PromotionForm />} />
          <Route
            path="/promotiondetailPage/:id"
            element={<PromotionDetailPage />}
          />
          <Route path="/StudyDetailPage/:id" element={<StudyDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
