import * as S from "./Join.style";

const Join = () => {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.LeftSection>
          <S.TopButton>개인 정보 입력</S.TopButton>
          <S.BottomButton>이력서 또는 구인 글 등록</S.BottomButton>
          <S.NextButton>다음 단계로</S.NextButton>
        </S.LeftSection>
        <S.RightSection>
          <S.ButtonContainer>
            <S.LeftButton>구인 회원</S.LeftButton>
            <S.RightButton>구직 회원</S.RightButton>
          </S.ButtonContainer>
          <S.FormContainer>
            <S.FormBox>
              <S.FormTitle>*성 함</S.FormTitle>
              <S.Name></S.Name>
            </S.FormBox>
            <S.FormBox>
              <S.FormTitle>*아 이 디</S.FormTitle>
              <S.Id></S.Id>
            </S.FormBox>
            <S.FormBox>
              <S.FormTitle>*비밀 번호</S.FormTitle>
              <S.Password></S.Password>
              <S.Password></S.Password>
            </S.FormBox>
            <S.FormBox>
              <S.FormTitle>*연 락 처</S.FormTitle>
              <S.Number></S.Number>
            </S.FormBox>
            <S.FormBox>
              <S.FormTitle>*이 메 일</S.FormTitle>
              <S.Email></S.Email>
            </S.FormBox>
            <S.FormBox>
              <S.FormTitle>*생년 월일</S.FormTitle>
              <S.Birth></S.Birth>
            </S.FormBox>
            <S.SexButton>
              <S.MaleButton>남성</S.MaleButton>
              <S.FemaleButton>여성</S.FemaleButton>
            </S.SexButton>
          </S.FormContainer>
        </S.RightSection>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Join;
