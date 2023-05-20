import * as S from "./Join_First.style";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { POST_SIGN_UP, POST_SEND_EMAIL } from "../api/apiUrl";
import { GENDER_LIST } from "./DropDownList";
import { API_URL } from "../config/constant";

const Join_First = () => {
  const [nextPage, setNextPage] = useState(true);
  const [currentGenderValue, setCurrentGenderValue] = useState("성별");
  const [showGenderOptions, setShowGenderOptions] = useState(false);

  const handleOnChangeSelectGenderValue = (e) => {
    const { innerText } = e.target;
    setCurrentGenderValue(innerText);
    setValue("성별", innerText);
    setShowGenderOptions(!showGenderOptions);
  };

  const handelSelectBoxClick = () => {
    setShowGenderOptions(!showGenderOptions);
    console.log(showGenderOptions);
  };

  const handleNextArrow = (e) => {
    setNextPage(false);
    console.log(nextPage);
  };

  const handlePrevArrow = (e) => {
    setNextPage(true);
  };

  const {
    reset,
    setValue,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.SubWrapper>
          <S.LeftContainer>
            <S.TitleBox>
              <S.TopTitle src="/image/ArtNJob_Logo_White.svg" />
              <S.BottomTitle>아트앤잡 로그인 또는 계정 만들기</S.BottomTitle>
            </S.TitleBox>
          </S.LeftContainer>
          <S.RightContainer>
            {/* 첫 번째 회원가입 폼 */}
            {nextPage === true ? (
              <S.Box>
                <S.Title>
                  <S.Arrow src="/image/Previous_vector.svg" />
                  회원 가입 (1/2)
                </S.Title>
                <S.TopSection>
                  <S.Form>
                    <S.FormTitle>이름</S.FormTitle>
                    <S.Name
                      isFocused={errors?.name}
                      {...register("Name", { required: true })}
                      placeholder="이름"
                    ></S.Name>
                  </S.Form>
                  <S.Form>
                    <S.FormTitle>성별</S.FormTitle>
                    <S.Gender
                      {...register("성별")}
                      placeholder="성별"
                      // onClick={() => setShowGenderOptions((prev) => !prev)}
                    >
                      <S.Header onClick={handelSelectBoxClick}>
                        <S.Label>{currentGenderValue}</S.Label>
                        <S.DropDown src="/image/Dropdown.svg" />
                      </S.Header>
                      {showGenderOptions === true ? (
                        <S.SelectOptions>
                          {GENDER_LIST.map((data) => (
                            <S.Option
                              key={data.gender}
                              value={data.gender}
                              onClick={handleOnChangeSelectGenderValue}
                            >
                              {data.gender}
                            </S.Option>
                          ))}
                        </S.SelectOptions>
                      ) : (
                        <S.SelectOptionsNone></S.SelectOptionsNone>
                      )}
                    </S.Gender>
                  </S.Form>
                </S.TopSection>
                <S.FormTitle>닉네임</S.FormTitle>
                <S.UserId
                  isFocused={errors?.userid}
                  {...register("UserId", { required: true })}
                  placeholder="닉네임을 입력해주세요"
                ></S.UserId>
                <S.FormTitle>생년월일</S.FormTitle>
                <S.Birth
                  isFocused={errors?.birth}
                  {...register("Birth", { required: true })}
                  placeholder="8자리 ex)19990102"
                ></S.Birth>
                <S.FormTitle>이메일</S.FormTitle>
                <S.EmailForm>
                  <S.Email
                    isFocused={errors?.email}
                    {...register("Email", { required: true })}
                    placeholder="이메일 주소 입력"
                  ></S.Email>
                  <S.EmailButton
                    onClick={() => {
                      axios({
                        url: `${API_URL}${POST_SEND_EMAIL}`,
                        method: "post",
                        data: {
                          receiver: "commetoi_yeoni@naver.com",
                        },
                      })
                        .then((response) => {
                          console.log("이메일 전송에 성공했습니다.");
                          console.log(response);
                        })
                        .catch((error) => {
                          console.log("이메일 전송에 실패했습니다.");
                          console.error(error);
                        });
                    }}
                  >
                    인증번호
                  </S.EmailButton>
                </S.EmailForm>
                <S.EmailForm>
                  <S.Email
                    isFocused={errors?.number}
                    {...register("Number", { required: true })}
                    placeholder="인증번호 입력"
                  ></S.Email>
                  <S.EmailButton>확인</S.EmailButton>
                </S.EmailForm>
                <S.FormTitle>비밀번호</S.FormTitle>
                <S.Password
                  isFocused={errors?.password}
                  {...register("Password", { required: true })}
                  placeholder="비밀번호를 입력해 주세요(8자리 이상)"
                ></S.Password>
                <S.Password placeholder="비밀번호를 다시 입력해 주세요 "></S.Password>
                <S.NextButton onClick={handleNextArrow}>다음</S.NextButton>
              </S.Box>
            ) : (
              <S.Box>
                <S.Title>
                  <S.Arrow
                    src="/image/Previous_vector.svg"
                    onClick={handlePrevArrow}
                  />
                  회원 가입 (2/2)
                </S.Title>
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
                <S.Agreement></S.Agreement>
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
            )}
          </S.RightContainer>
        </S.SubWrapper>
      </S.Wrapper>
    </form>
  );
};

export default Join_First;
