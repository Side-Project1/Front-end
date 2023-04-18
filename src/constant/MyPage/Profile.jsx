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
        <S.BottomSection>
          <S.PhotoBox>
            <S.Icon></S.Icon>
            <S.Text>사진</S.Text>
            <S.ImageDelete>사진 삭제</S.ImageDelete>
            <S.ImageButton>사진 불러오기</S.ImageButton>
          </S.PhotoBox>
          <S.PhoneNumberBox>
            <S.Icon></S.Icon>
            <S.Text>휴대번호</S.Text>
            <S.InputBoxText>휴대번호</S.InputBoxText>
            <S.PhoneNumberInput placeholder="000-0000-0000"></S.PhoneNumberInput>
          </S.PhoneNumberBox>
          <S.AccountBox>
            <S.Icon></S.Icon>
            <S.Text>계정</S.Text>
            <S.InputBoxText>이름</S.InputBoxText>
            <S.LastNameInputBox placeholder="성"></S.LastNameInputBox>
            <S.FirstNameInputBox placeholder="이름"></S.FirstNameInputBox>
            <S.InputBoxText>이메일</S.InputBoxText>
            <S.EmailInputBox placeholder="ss972972@naver.com"></S.EmailInputBox>
            <S.InputBoxText>아이디</S.InputBoxText>
            <S.EmailInputBox placeholder="ss97272"></S.EmailInputBox>
          </S.AccountBox>
          <S.PasswordBox>
            <S.Icon></S.Icon>
            <S.Text>비밀번호</S.Text>
            <S.InputBoxText>현재 비밀번호</S.InputBoxText>
            <S.PasswordInputBox></S.PasswordInputBox>
            <S.InputBoxText>새 비밀번호</S.InputBoxText>
            <S.PasswordInputBox></S.PasswordInputBox>
            <S.InputBoxText>새 비밀번호 확인</S.InputBoxText>
            <S.PasswordInputBox></S.PasswordInputBox>
          </S.PasswordBox>
        </S.BottomSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Profile;
