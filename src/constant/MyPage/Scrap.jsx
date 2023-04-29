import * as S from "./Scrap.style";

const Scrap = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TopSection>
          <S.Title>스크랩 목록</S.Title>
          <S.SubTitle>
            구직 게시판에서 좋아요한 글을 확인 할 수 있습니다
          </S.SubTitle>
        </S.TopSection>
        <S.BottomSection>
          <S.TopBox>
            <S.AllSelect></S.AllSelect>
            <S.Delete>/ 삭제</S.Delete>
            <S.AllItem>전체 공고</S.AllItem>
          </S.TopBox>
          <S.Bar></S.Bar>

          <S.BottomBox>
            <S.List>
              <S.ListValue>
                <S.CheckBox></S.CheckBox>
                <S.TitleValue>
                  <S.ListTitle>웹 개발자 신입/경력</S.ListTitle>
                  <S.ListSubTitle>
                    (주)000프로그레밍 신입/경력 서울시 광진구
                  </S.ListSubTitle>
                </S.TitleValue>
                <S.ListDate>2023-03-12</S.ListDate>
                <S.RecruitButton>즉시 지원</S.RecruitButton>
                <S.Date>
                  <S.DateButton>마감</S.DateButton>
                  <S.DeadLine>~3.19 까지</S.DeadLine>
                </S.Date>
              </S.ListValue>
              <S.Bar></S.Bar>
            </S.List>
            <S.List>
              <S.ListValue>
                <S.CheckBox></S.CheckBox>
                <S.TitleValue>
                  <S.ListTitle>웹 개발자 신입/경력</S.ListTitle>
                  <S.ListSubTitle>
                    (주)000프로그레밍 신입/경력 서울시 광진구
                  </S.ListSubTitle>
                </S.TitleValue>

                <S.ListDate>2023-03-12</S.ListDate>
                <S.RecruitButton>즉시 지원</S.RecruitButton>
                <S.Date>
                  <S.DateButton>마감</S.DateButton>
                  <S.DeadLine>~3.19 까지</S.DeadLine>
                </S.Date>
              </S.ListValue>
              <S.Bar></S.Bar>
            </S.List>
          </S.BottomBox>
        </S.BottomSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Scrap;
