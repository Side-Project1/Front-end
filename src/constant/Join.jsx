import * as S from "./Join.style";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/constant";
import { POST_SIGN_UP } from "./api/apiUrl";
import React from "react";
import axios from "axios";
import { useState } from "react";

const Join = () => {
  cosnt[(nextPage, useNextPage)] = useState(false);

  return (
    <form>
      <S.Wrapper>
        <S.SubWrapper>
          <S.LeftSection>
            <S.TopButton>개인 정보 입력</S.TopButton>
            <S.BottomButton>이력서 또는 구인 글 등록</S.BottomButton>
            <S.NextButton>다음 단계로</S.NextButton>
          </S.LeftSection>
          <S.RightSection>
            <S.ButtonContainer>
              <S.LeftButton>구인 회원</S.LeftButton>
              <S.RightButton>구직 회원</S.RightButton>
            </S.ButtonContainer>
            <S.FormContainer>
              <S.FormBox>
                <S.FormTitle>*성 함</S.FormTitle>
                <S.Name
                  id="user_name"
                  {...register("user_name", { required: true })}
                  placeholder="user_name"
                ></S.Name>
              </S.FormBox>
              <S.FormBox>
                <S.FormTitle>*아 이 디</S.FormTitle>
                <S.Id
                  id="user_id"
                  {...register("user_id", { required: true })}
                  placeholder="user_id"
                ></S.Id>
              </S.FormBox>
              <S.FormBox>
                <S.FormTitle>*비밀 번호</S.FormTitle>
                <S.PasswordBox>
                  <S.Password
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                  ></S.Password>
                  {/* <S.Password placeholder="*비밀 번호 확인"></S.Password> */}
                </S.PasswordBox>
              </S.FormBox>
              <S.FormBox>
                <S.FormTitle>*연 락 처</S.FormTitle>
                <S.Number
                  id="phone"
                  {...register("phone", { required: true })}
                  placeholder="phone"
                ></S.Number>
              </S.FormBox>
              <S.FormBox>
                <S.FormTitle>*이 메 일</S.FormTitle>
                <S.Email
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                ></S.Email>
              </S.FormBox>
              <S.FormBox>
                <S.FormTitle>*생년 월일</S.FormTitle>
                <S.Birth
                  id="birthday"
                  {...register("birthday", { required: true })}
                  placeholder="birthday"
                ></S.Birth>
              </S.FormBox>
              <S.FormBox>
                <S.FormTitle>*성별</S.FormTitle>
                <S.Birth
                  id="gender"
                  {...register("gender", { required: true })}
                  placeholder="gender"
                ></S.Birth>
              </S.FormBox>
              {/* <S.SexButton onClick={() => handleSexClick()}>
              <S.MaleButton id="Male">남성</S.MaleButton>
              <S.FemaleButton id="Female">여성</S.FemaleButton>
            </S.SexButton> */}
            </S.FormContainer>
          </S.RightSection>
          <S.LeftContainer>
            <S.TitleBox>
              <S.TopTitle src="/image/ArtNJob_Logo_White.svg" />
              <S.BottomTitle>아트앤잡 로그인 또는 계정 만들기</S.BottomTitle>
            </S.TitleBox>
          </S.LeftContainer>
          <S.RightContainer>
            <S.Box></S.Box>
          </S.RightContainer>
        </S.SubWrapper>
      </S.Wrapper>
      //{" "}
    </form>
  );
};

export default Join;
