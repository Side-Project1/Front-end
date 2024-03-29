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
            자신의 개인정보를 수정할 수 있는 페이지 입니다
          </S.SubTitle>
          <S.RequiredNotice>저장하기</S.RequiredNotice>
        </S.TopSection>
        <S.BottomSection>
          <S.PhotoBox>
            <S.TextBox>
              <S.Icon src="/image/icon/photoicon.svg"></S.Icon>
              <S.Text>사진</S.Text>
            </S.TextBox>
            <S.ImageBox>
              <S.ImageIcon src="/image/ProfileImage.png" />
              <S.ImageDelete>사진 삭제</S.ImageDelete>
              <S.ImageButton>사진 불러오기</S.ImageButton>
            </S.ImageBox>
          </S.PhotoBox>
          <S.PhoneNumberBox>
            <S.TextBox>
              <S.Icon src="/image/icon/phoneicon.svg"></S.Icon>
              <S.Text>휴대번호</S.Text>
            </S.TextBox>
            <S.Box>
              <S.InputBoxText>휴대번호</S.InputBoxText>
              <S.PhoneNumberInput placeholder="000-0000-0000"></S.PhoneNumberInput>
            </S.Box>
          </S.PhoneNumberBox>
          <S.AccountBox>
            <S.TextBox>
              <S.Icon src="/image/icon/accounticon.svg"></S.Icon>
              <S.Text>계정</S.Text>
            </S.TextBox>
            <S.Box>
              <S.InputBoxText>이름</S.InputBoxText>
              <S.LastNameInputBox placeholder="성"></S.LastNameInputBox>
              <S.FirstNameInputBox placeholder="이름"></S.FirstNameInputBox>
            </S.Box>
            <S.Box>
              <S.InputBoxText>이메일</S.InputBoxText>
              <S.EmailInputBox placeholder="ss972972@naver.com"></S.EmailInputBox>
            </S.Box>
            <S.Box>
              <S.InputBoxText>아이디</S.InputBoxText>
              <S.EmailInputBox placeholder="ss97272"></S.EmailInputBox>
            </S.Box>
          </S.AccountBox>
          <S.PasswordBox>
            <S.TextBox>
              <S.Icon src="/image/icon/lockicon.svg"></S.Icon>
              <S.Text>비밀번호</S.Text>
            </S.TextBox>
            <S.Box>
              <S.InputBoxText>현재 비밀번호</S.InputBoxText>
              <S.PasswordInputBox></S.PasswordInputBox>
            </S.Box>
            <S.Box>
              <S.InputBoxText>새 비밀번호</S.InputBoxText>
              <S.PasswordInputBox></S.PasswordInputBox>
            </S.Box>
            <S.Box>
              <S.InputBoxText>새 비밀번호 확인</S.InputBoxText>
              <S.PasswordInputBox></S.PasswordInputBox>
            </S.Box>
          </S.PasswordBox>
        </S.BottomSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Profile;
