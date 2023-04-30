import * as S from "./MainStudy.style";
import MainStudyCard from "./MainStudyCard";

const MainStudy = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>실시간 스터디 게시판</S.Title>
        <S.Section>
          <MainStudyCard />
          <MainStudyCard />
          <MainStudyCard />
          <MainStudyCard />
        </S.Section>
        <S.GoStudyButton>스터디 모집하러 가기</S.GoStudyButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default MainStudy;
