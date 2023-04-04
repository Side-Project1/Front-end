import { useState } from "react";
import * as S from "./Login.style";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.LeftContainer>
          <S.TitleBox>
            <S.TopTitle>뮤즈마켓</S.TopTitle>
            <S.BottomTitle>회원 가입을 환영합니다.</S.BottomTitle>
          </S.TitleBox>
          <S.SubTitle>
            뮤즈마켓 회원 가입 후, 뮤즈마켓의 다양한 서비스를 이용해 보세요.
          </S.SubTitle>
          <S.SubDescription>뮤즈마켓 회원 가입 하러 가기</S.SubDescription>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Box>
            <S.EmailDescription>자동 로그인</S.EmailDescription>
            <S.EmailBox placeholder="이메일"></S.EmailBox>
            <S.PasswordBox placeholder="비밀번호"></S.PasswordBox>
            <S.PasswordDescription>
              아이디 / 비밀번호 찾기
            </S.PasswordDescription>
          </S.Box>
          <S.LoginButton>로그인</S.LoginButton>
          <S.SocialLoginBox>
            <S.SocialLoginText>다른 계정으로 로그인 하기</S.SocialLoginText>
            <S.SocialLoginButton>소셜 계정 로그인</S.SocialLoginButton>
          </S.SocialLoginBox>
        </S.RightContainer>
      </S.SubWrapper>
      <S.BottomBox>
        <S.BottomSection src="/image/backgroundImg.png"></S.BottomSection>
        <S.BottomSection src="/image/backgroundImg.png"></S.BottomSection>
      </S.BottomBox>
    </S.Wrapper>
  );
};

export default Login;
