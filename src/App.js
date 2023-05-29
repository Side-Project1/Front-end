import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./components/common/globalstyle";
import Community from "./constant/commuintyPage/Community";
import MainHeader from "./components/common/Header/header";
import { useEffect, useState } from "react";
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
import CommunityForm from "./constant/commuintyPage/communityForm";

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 토큰을 가져와서 존재 여부를 판단
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLogin(token) {
    // 로그인 성공 시 로컬 스토리지에 토큰을 저장하고, 로그인 상태를 업데이트
    localStorage.setItem("accessToken", token);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    // 로그아웃 시 로컬 스토리지에서 토큰을 제거하고, 로그인 상태를 업데이트
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div style={{ zIndex: 1, position: "relative" }}>
            {isLoggedIn ? (
              <AfterHeader onLogout={handleLogout} />
            ) : (
              <MainHeader />
            )}
          </div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<Community />} />
            {/* <Route path="/job" element={<Job />} /> */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/SignUp" element={<SignUp />} />
            {/* <Route path="/form" element={<Form />} /> */}
            <Route path="/Study" element={<Study />} />
            <Route path="/Studyform" element={<StudyForm />} />
            <Route path="/Promotion" element={<Promotion />} />
            <Route path="/promotionform" element={<PromotionForm />} />
            <Route path="/communityForm" element={<CommunityForm />} />
            <Route
              path="/promotiondetailPage/:id"
              element={<PromotionDetailPage />}
            />
            <Route path="/StudyDetailPage/:id" element={<StudyDetailPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;