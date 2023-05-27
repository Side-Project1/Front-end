import * as S from "./Login.style";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/constant";
import { POST_LOGIN } from "../api/apiUrl";
// import { Checkbox, FormControlLabel } from "@mui/material";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    user_id: "",
    password: "",
  });
  const [session, setSession] = useState(null);
  // const history = useHistory();

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}${POST_LOGIN}`, {
        user_id: userInfo.user_id,
        password: userInfo.password,
      });
      console.log(res.data); // 세션정보나 사용자의 정보를 받아올 수 있음
      setSession(res.data);
      // history.push("/"); // 메인 화면으로 이동
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <S.Wrapper>
        <S.SubWrapper>
          <S.LeftContainer>
            <S.TitleBox>
              <S.TopTitle src="/image/ArtNJob_Logo_White.svg" />
              <S.BottomTitle>아트앤잡 로그인 또는 계정 만들기</S.BottomTitle>
            </S.TitleBox>
          </S.LeftContainer>
          <S.RightContainer>
            <S.Box>
              <S.LoginTitle>로그인</S.LoginTitle>
              <S.TopBox>
                <S.EmailBox
                  placeholder="아이디를 입력해주세요"
                  type="text"
                  name="user_id"
                  value={userInfo.user_id}
                  onChange={onChange}
                ></S.EmailBox>
                <S.EmailBox
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={onChange}
                ></S.EmailBox>
                <S.LoginButton type="submit">로그인</S.LoginButton>
              </S.TopBox>
              <S.Description>
                {/* <S.CheckBoxContainer></S.CheckBoxContainer> */}
                <S.LoginDescription>로그인 유지</S.LoginDescription>
                <S.PasswordDescription>
                  아이디 / 비밀번호 찾기
                </S.PasswordDescription>
              </S.Description>
              <S.SocialLoginBox>
                <S.SocialLoginText>SNS 계정으로 로그인 하기</S.SocialLoginText>
                <S.SocialLoginButton>카카오로 로그인 하기</S.SocialLoginButton>
                <S.LoginButton>계정 만들기</S.LoginButton>
              </S.SocialLoginBox>
            </S.Box>
          </S.RightContainer>
        </S.SubWrapper>
      </S.Wrapper>
    </form>
  );
};

export default Login;
