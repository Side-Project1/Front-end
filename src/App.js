
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import GlobalStyle from "./components/common/globalstyle";
import Community from "./constant/commuintyPage/Community";
import Membership from "./pages/Membership";
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
import Join_First from "./constant/Join_First";


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
            <MainHeader onLogout={handleLogout} />
          ) : (
            <AfterHeader onLogin={handleLogin} />
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          {/* <Route path="/job" element={<Job />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/Join" element={<Join_First />} />
          <Route path="/Membership" element={<Membership />} />
          {/* <Route path="/form" element={<Form />} /> */}
          <Route path="/Study" element={<Study />} />
          <Route path="/Studyform" element={<StudyForm />} />
          <Route path="/Promotion" element={<Promotion />} />
          <Route path="/promotionform" element={<PromotionForm />} />
          <Route path="/promotiondetailPage/:id" element={<PromotionDetailPage />} />
          <Route path="/StudyDetailPage/:id" element={<StudyDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
