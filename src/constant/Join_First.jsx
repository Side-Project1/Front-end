import * as S from "./Join_First.style";
import React from "react";
import { useForm } from "react-hook-form";

const Join_First = () => {
  const {
    reset,
    setValue,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.LeftContainer>
          <S.TitleBox>
            <S.TopTitle src="/image/ArtNJob_Logo_White.svg" />
            <S.BottomTitle>아트앤잡 로그인 또는 계정 만들기</S.BottomTitle>
          </S.TitleBox>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Box>
            <S.Title>회원 가입 (1/2)</S.Title>
            <S.TopSection>
              <S.Form>
                <S.FormTitle>이름</S.FormTitle>
                <S.Name placeholder="이름"></S.Name>
              </S.Form>
              <S.Form>
                <S.FormTitle>성별</S.FormTitle>
                <S.Gender placeholder="성별"></S.Gender>
              </S.Form>
            </S.TopSection>

            <S.FormTitle>닉네임</S.FormTitle>
            <S.UserId placeholder="닉네임을 입력해주세요"></S.UserId>
            <S.FormTitle>생년월일</S.FormTitle>
            <S.Birth placeholder="8자리 ex)19990102"></S.Birth>
            <S.FormTitle>이메일</S.FormTitle>
            <S.Email placeholder="이메일 주소 입력"></S.Email>
            {/* <S.EmailButton></S.EmailButton> */}
            <S.Email placeholder="인증번호 입력"></S.Email>
            {/* <S.EmailButton></S.EmailButton> */}
            <S.FormTitle>비밀번호</S.FormTitle>
            <S.Password placeholder="비밀번호를 입력해 주세요(8자리 이상)"></S.Password>
            <S.Password placeholder="비밀번호를 다시 입력해 주세요 "></S.Password>
            <S.NextButton>다음</S.NextButton>
          </S.Box>
        </S.RightContainer>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Join_First;
