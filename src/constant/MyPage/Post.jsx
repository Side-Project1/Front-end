import * as S from "./Scrap.style";
// import * as S from "./Comment.style";

const Post = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TopSection>
          <S.Title>내가 쓴 글</S.Title>
          <S.SubTitle>내가 쓴 글을 확인할 수 있습니다.</S.SubTitle>
        </S.TopSection>
        <S.BottomSection>
          <S.TopBox>
            <S.AllSelect></S.AllSelect>
            <S.Delete>/ 삭제</S.Delete>
          </S.TopBox>
          <S.TopBar></S.TopBar>
          <S.ListHeader>
            <S.HeaderNumber>총 4건</S.HeaderNumber>
            <S.HeaderTitle>글 제목 + 게시판</S.HeaderTitle>
            <S.HeaderDate>글 게시일</S.HeaderDate>
          </S.ListHeader>
          <S.Bar></S.Bar>
          <S.BottomBox>
            <S.List>
              <S.ListValue>
                <S.CheckBox></S.CheckBox>
                <S.TitleValue>
                  <S.ListSubTitle>디자인 미술 게시판</S.ListSubTitle>
                  <S.ListTitle>디자인 페이지 오류</S.ListTitle>
                </S.TitleValue>
                <S.ListDate>2023-03-12</S.ListDate>
                <S.ViewBox>
                  <S.Icon src="/image/icon/like.svg"></S.Icon>
                  <S.LikeNumber>0</S.LikeNumber>
                  <S.Icon src="/image/icon/copy.svg"></S.Icon>
                  <S.CopyNumber>3</S.CopyNumber>
                </S.ViewBox>
              </S.ListValue>
              <S.Bar></S.Bar>
            </S.List>
          </S.BottomBox>
        </S.BottomSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Post;
