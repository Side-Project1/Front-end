import * as S from "./Menu.style";
import { MY_PAGE_MENU } from "./MyPage";

const Menu = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuSection>
          {MY_PAGE_MENU.map((data, index) => (
            <S.Section key={index}>
              <S.MenuIcon src={data.icon} />
              <S.Title>{data.title}</S.Title>
            </S.Section>
          ))}
        </S.MenuSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Menu;
