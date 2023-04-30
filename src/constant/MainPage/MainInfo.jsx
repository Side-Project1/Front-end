import { MAIN_CATEGORY_LIST, MAIN_TAG_LIST } from "./Main";
import * as S from "./MainInfo.style";

const MainInfo = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TopSection>
          <S.InfoTitle>문화 예술 채용을 편리하게 -</S.InfoTitle>
          <S.InfoImg src="/image/ArtNJob_Boy.png" />
          <S.SlideBox>
            <S.Slide></S.Slide>
          </S.SlideBox>
        </S.TopSection>
        <S.BottomSection>
          <S.SerchBox>
            <S.Search placeholder="검색어를 입력하세요."></S.Search>
            <S.SubText>
              {MAIN_TAG_LIST.map((data) => (
                <S.SearchSubText key={data.title}>{data.title}</S.SearchSubText>
              ))}
            </S.SubText>
          </S.SerchBox>
          <S.CategoryBox>
            {MAIN_CATEGORY_LIST.map((data) => (
              <S.Category key={data.title}>
                <S.CategoryIcon src={data.icon} />
                <S.CategoryTitle>{data.title}</S.CategoryTitle>
              </S.Category>
            ))}
          </S.CategoryBox>
        </S.BottomSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default MainInfo;
