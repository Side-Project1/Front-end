import {
  CompanyLogo,
  HamburgerMenu,
  HeaderWrap,
  Nav,
  NavLi,
} from "./header.style";
import companyLogo from "../../../assets/images/폰포튼 1.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainHeader = (props) => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleLogout() {
    setIsMenuOpen(false);
    props.onLogout();
  }
  return (
    <HeaderWrap>
      <CompanyLogo
        src={companyLogo}
        alt="logo"
        href=""
        onClick={() => {
          navigate("/");
        }}
      />
      <Nav isMenuOpen={isMenuOpen}>
        <NavLi
          current
          onClick={() => {
            navigate("/");
          }}
        >
          홈
        </NavLi>
        <NavLi
          onClick={() => {
            navigate("/Promotion");
          }}
        >
          홍보
        </NavLi>
        <NavLi
          onClick={() => {
            navigate("/study");
          }}
        >
          스터디
        </NavLi>
        <NavLi
          onClick={() => {
            navigate("/community");
          }}
        >
          커뮤니티
        </NavLi>
        <NavLi
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </NavLi>
        <NavLi
          join
          onClick={() => {
            navigate("/SignUp");
          }}
        >
          회원가입
        </NavLi>
      </Nav>
      <HamburgerMenu
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></HamburgerMenu>
    </HeaderWrap>
  );
};

export default MainHeader;
