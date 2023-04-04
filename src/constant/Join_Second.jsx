import * as S from "./Join_Second.style";
import { API_URL } from "../config/constant";
import { POST_SIGN_UP } from "./api/apiUrl";
import React from "react";
import axios from "axios";

const Join_Second = () => {
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
            <S.Title>회원 가입 (2/2)</S.Title>
            <S.FormTitle>직업</S.FormTitle>
            <S.UserId placeholder="직업을 선택해 주세요"></S.UserId>
            <S.FormTitle>휴대폰 번호</S.FormTitle>
            <S.EmailForm>
              <S.Email placeholder="‘-’ 없이 숫자만"></S.Email>
              <S.EmailButton>인증번호</S.EmailButton>
            </S.EmailForm>
            <S.EmailForm>
              <S.Email placeholder="인증번호 입력"></S.Email>
              <S.EmailButton>확인</S.EmailButton>
            </S.EmailForm>
            <S.FormTitle>가입경로 (선택)</S.FormTitle>
            <S.UserId placeholder="가입경로를 선택해 주세요."></S.UserId>
            <S.NextButton
              onClick={() => {
                axios({
                  url: `${API_URL}${POST_SIGN_UP}`,
                  method: "post",
                  data: {
                    user_id: "tndustndus",
                    password: "tndus123!",
                    user_name: "웅123",
                    phone: "010-8921-8709",
                    email: "tndusdlqslek@naver.com",
                    birthday: "98016",
                    gender: "남자",
                  },
                })
                  .then((response) => {
                    console.log("회원가입에 성공헀습니다.");
                    console.log(response.data);
                  })
                  .catch((error) => {
                    console.log("에러가 발생했습니다");
                    console.log(error.response);
                    console.log(error.response.data);
                    alert(error.response.data.message);
                  });
              }}
            >
              가입 완료
            </S.NextButton>
          </S.Box>
        </S.RightContainer>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Join_Second;
