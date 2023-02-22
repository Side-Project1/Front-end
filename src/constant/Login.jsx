import * as S from "./Login.style";

const Login = () => {
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
            <S.EmailDescription></S.EmailDescription>
            <S.EmailBox></S.EmailBox>
            <S.PasswordBox></S.PasswordBox>
            <S.PasswordDescription>
              아이디 / 비밀번호 찾기
            </S.PasswordDescription>
          </S.Box>
          <S.LoginButton>로그인</S.LoginButton>
          {/* <S.SocialLoginButton></S.SocialLoginButton> */}
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
