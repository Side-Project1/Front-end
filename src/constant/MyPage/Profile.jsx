import Menu from "./Menu";
import { MY_PAGE_MENU } from "./MyPage";
import * as S from "./Profile.style";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TopSection>
          <S.Title>나의 프로필 관리</S.Title>
          <S.SubtitleIcon></S.SubtitleIcon>
          <S.SubTitle>
            자신의 개인정보를 수정/확인할 수 있는 페이지 입니다
          </S.SubTitle>
          <S.RequiredNotice>*필수입력항목</S.RequiredNotice>
        </S.TopSection>
        <S.BottomSection></S.BottomSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Profile;
