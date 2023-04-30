import * as S from "./MainStudy.style";

const MainStudy = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>실시간 스터디 게시판</S.Title>
        <S.Section>
          <S.Card>
            <S.TopSection>
              <S.CradTitle>스터디 구합니다 </S.CradTitle>
              <S.CardButton>모집중</S.CardButton>
            </S.TopSection>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam laboris nisi ut aliquip consequat de...
            </S.Text>
            <S.BottomSection>
              <S.Icon src="/image/icon/viewNumber.svg" />
              <S.ViewNumber>100</S.ViewNumber>
              <S.Icon src="/image/icon/commentNumber.svg" />
              <S.CommentNumber>2</S.CommentNumber>
            </S.BottomSection>
          </S.Card>
          <S.Card>
            <S.TopSection>
              <S.CradTitle>스터디 구합니다 </S.CradTitle>
              <S.CardButton>모집중</S.CardButton>
            </S.TopSection>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam laboris nisi ut aliquip consequat de...
            </S.Text>
            <S.BottomSection>
              <S.Icon src="/image/icon/viewNumber.svg" />
              <S.ViewNumber>100</S.ViewNumber>
              <S.Icon src="/image/icon/commentNumber.svg" />
              <S.CommentNumber>2</S.CommentNumber>
            </S.BottomSection>
          </S.Card>
          <S.Card>
            <S.TopSection>
              <S.CradTitle>스터디 구합니다 </S.CradTitle>
              <S.CardButton>모집중</S.CardButton>
            </S.TopSection>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam laboris nisi ut aliquip consequat de...
            </S.Text>
            <S.BottomSection>
              <S.Icon src="/image/icon/viewNumber.svg" />
              <S.ViewNumber>100</S.ViewNumber>
              <S.Icon src="/image/icon/commentNumber.svg" />
              <S.CommentNumber>2</S.CommentNumber>
            </S.BottomSection>
          </S.Card>
        </S.Section>
        <S.GoStudyButton>스터디 모집하러 가기</S.GoStudyButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default MainStudy;
