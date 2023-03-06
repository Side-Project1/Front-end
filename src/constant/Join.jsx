import * as S from "./Join.style";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/constant";
import React from "react";
import axios from "axios";
import { useState } from "react";

const Join = () => {
  // const [gender, setGender] = useState();

  // const handleSexClick = (e) => {
  //   const id = e.target.id;
  //   setGender(id);

  //   if ("Male" === id) {
  //     setGender("Male");
  //   } else if ("Female" === id) {
  //     setGender("Female");
  //   }
  // };

  const {
    reset,
    setValue,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const onSubmit = (data, e) => {
  //   mutateAsync(data)
  //     .then((res) => {})
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       reset({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         occupation: "",
  //         location: "",
  //         note: "",
  //       });
  //     });
  // };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <S.Wrapper>
      <S.Title>
        JOIN
        <br />
        MEMBERSHIP
      </S.Title>
      <S.SubWrapper>
        <S.LeftSection>
          <S.TopButton>개인 정보 입력</S.TopButton>
          <S.BottomButton>이력서 또는 구인 글 등록</S.BottomButton>
          <S.NextButton
            onClick={() => {
              axios({
                url: `${API_URL}/auth/signup`,
                method: "post",
                data: {
                  user_id: "dnd2dn1232",
                  password: "dnd2dnd2@@@3",
                  user_name: "웅123",
                  phone: "010-8921-8709",
                  email: "dn2@naver.com",
                  birthday: "98016",
                  gender: "남자",
                },
              })
                .then((response) => {
                  console.log("성공입니다");
                })
                .catch((error) => {
                  console.log("에러가 발생했습니다");
                  console.log(error.response);
                  console.log(error.response.data);
                });
            }}
          >
            다음 단계로
          </S.NextButton>
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
      </S.SubWrapper>
    </S.Wrapper>
    // </form>
  );
};

export default Join;
