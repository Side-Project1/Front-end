import * as S from "./Menu.style";
import { MY_PAGE_MENU } from "./MyPage";

const Menu = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuSection>
          <S.Section>
            <S.MenuIcon src="/image/MyPage/folder.svg"></S.MenuIcon>
            <S.Title>프로필</S.Title>
          </S.Section>
          <S.Section>
            <S.MenuIcon src="/image/MyPage/Wrote.svg"></S.MenuIcon>
            <S.Title>내가 쓴 글</S.Title>
          </S.Section>
          <S.Section>
            <S.MenuIcon src="/image/MyPage/Comment.svg"></S.MenuIcon>
            <S.Title>내가 쓴 댓글</S.Title>
          </S.Section>
          <S.Section>
            <S.MenuIcon src="/image/MyPage/Pin.svg"></S.MenuIcon>
            <S.Title>스크랩</S.Title>
          </S.Section>
          <S.Section>
            <S.MenuIcon src="/image/MyPage/Doc.svg"></S.MenuIcon>
            <S.Title>이력서</S.Title>
          </S.Section>
          <S.Section>
            <S.MenuIcon src="/image/MyPage/Support.svg"></S.MenuIcon>
            <S.Title>지원현황</S.Title>
          </S.Section>
        </S.MenuSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Menu;
