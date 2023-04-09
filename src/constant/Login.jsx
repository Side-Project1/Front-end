import * as S from "./Login.style";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/constant";
import { POST_LOGIN, POST_SEND_EMAIL } from "./api/apiUrl";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
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
              <S.EmailBox placeholder="이메일을 입력해주세요"></S.EmailBox>
              <S.EmailBox placeholder="비밀번호를 입력해주세요"></S.EmailBox>
              <S.LoginButton
                onClick={() => {
                  /*로그인*/
                  axios({
                    url: `${API_URL}${POST_LOGIN}`,
                    method: "post",
                    data: {
                      password: "tndus123!",
                      user_id: "tndustndus",
                    },
                  })
                    .then((response) => {
                      console.log("로그인에 성공했습니다.");
                      console.log(response.data);
                    })
                    .catch((error) => {
                      console.log("에러가 발생했습니다");
                      console.log(error.response);
                      console.log(error.response.data);
                    });
                }}
              >
                로그인
              </S.LoginButton>
            </S.TopBox>
            <S.Description>
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
  );
};

export default Login;
