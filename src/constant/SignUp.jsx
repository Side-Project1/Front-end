import * as S from "./SignUp.style";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { POST_SIGN_UP, POST_SEND_EMAIL } from "../api/apiUrl";
import {
  AGREEMENT_LIST,
  GENDER_LIST,
  JOB_LIST,
  PATH_LIST,
} from "./DropDownList";
import { API_URL } from "../config/constant";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";

const SignUp = () => {
  const [nextPage, setNextPage] = useState(true);
  // Gender
  const [currentGenderValue, setCurrentGenderValue] = useState("성별");
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  // Job
  const [currentJobValue, setCurrentJobValue] = useState("직업을 선택해주세요");
  const [showJobOptions, setShowJobOptions] = useState(false);
  //Path
  const [currentPathValue, setCurrentPathValue] =
    useState("가입 경로를 선택해주세요");
  const [showPathOptions, setShowPathOptions] = useState(false);

  // Gender
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

  // Job
  const handleOnChangeSelectJobValue = (e) => {
    const { innerText } = e.target;
    setCurrentJobValue(innerText);
    setShowJobOptions(!showJobOptions);
  };

  const handelJobSelectBoxClick = () => {
    setShowJobOptions(!showJobOptions);
    console.log(showJobOptions);
  };

  // Path
  const handleOnChangeSelectPathValue = (e) => {
    const { innerText } = e.target;
    setCurrentPathValue(innerText);
    setShowPathOptions(!showPathOptions);
  };

  const handelPathSelectBoxClick = () => {
    setShowPathOptions(!showPathOptions);
    console.log(showPathOptions);
  };

  const handleNextArrow = (e) => {
    setNextPage(false);
    console.log(nextPage);
  };

  const handlePrevArrow = (e) => {
    setNextPage(true);
  };

  // checkbox 로직
  const [checklist, setChecklist] = useState({
    "만 14세 이상입니다.": false,
    "서비스 이용약관에 동의합니다.": false,
    "개인정보 수집/이용에 동의합니다.": false,
    "개인정보 제 3자 제공에 동의합니다.": false,
    "광고성 정보 수신에 동의합니다.": false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setChecklist((prevChecklist) => ({
      ...prevChecklist,
      [name]: checked,
    }));
  };

  const handleAllChecked = () => {
    const allChecked = Object.values(checklist).every((value) => value);
    setChecklist((prevChecklist) => {
      const updatedChecklist = {};
      for (const key in prevChecklist) {
        updatedChecklist[key] = !allChecked;
      }
      return updatedChecklist;
    });
  };

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${API_URL}${POST_SIGN_UP}`, data)
      .then((response) => {
        console.log("회원가입 성공:", response.data);
      })
      .catch((error) => {
        console.error("회원가입 실패:", error);
      });
  };

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
                      {...register("user_name", { required: true })}
                      placeholder="이름"
                    ></S.Name>
                    {errors.user_name && (
                      <S.ErrorMsg>이름을 입력해주세요.</S.ErrorMsg>
                    )}
                  </S.Form>
                  <S.Form>
                    <S.FormTitle>성별</S.FormTitle>
                    <S.Gender
                      {...register("gender", { required: true })}
                      placeholder="성별"
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
                    {errors.user_name && (
                      <S.ErrorMsg>성별을 선택해주세요.</S.ErrorMsg>
                    )}
                  </S.Form>
                </S.TopSection>
                <S.FormTitle>닉네임</S.FormTitle>
                <S.UserId
                  {...register("user_id", { required: true })}
                  placeholder="닉네임을 입력해주세요"
                ></S.UserId>
                {errors.user_id && (
                  <S.ErrorMsg>아이디를 입력해주세요.</S.ErrorMsg>
                )}
                <S.FormTitle>생년월일</S.FormTitle>
                <S.Birth
                  {...register("birthday", { required: true })}
                  placeholder="8자리 ex)19990102"
                ></S.Birth>
                {errors.birthday && (
                  <S.ErrorMsg>생년월일을 입력해주세요.</S.ErrorMsg>
                )}
                <S.FormTitle>이메일</S.FormTitle>
                <S.EmailForm>
                  <S.Email
                    {...register("email", { required: true })}
                    placeholder="이메일 주소 입력"
                  ></S.Email>
                  <S.EmailButton
                    onClick={(data) => {
                      axios({
                        url: `${API_URL}${POST_SEND_EMAIL}`,
                        method: "post",
                        data: {
                          receiver: data.receiver,
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
                  {...register("password", { required: true })}
                  placeholder="비밀번호를 입력해 주세요(8자리 이상)"
                ></S.Password>
                {errors.password && (
                  <S.ErrorMsg>비밀번호를 입력해주세요.</S.ErrorMsg>
                )}
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
                <S.Form>
                  <S.FormTitle>직업</S.FormTitle>
                  <S.Job
                    {...register("job", { required: true })}
                    placeholder="직업을 선택해주세요"
                  >
                    <S.Header onClick={handelJobSelectBoxClick}>
                      <S.Label>{currentJobValue}</S.Label>
                      <S.DropDown src="/image/Dropdown.svg" />
                    </S.Header>
                    {showJobOptions === true ? (
                      <S.JobSelectOptions>
                        {JOB_LIST.map((data) => (
                          <S.JobOption
                            key={data.title}
                            value={data.title}
                            onClick={handleOnChangeSelectJobValue}
                          >
                            {data.title}
                          </S.JobOption>
                        ))}
                      </S.JobSelectOptions>
                    ) : (
                      <S.SelectOptionsNone></S.SelectOptionsNone>
                    )}
                  </S.Job>
                  {errors.job && <S.ErrorMsg>직업을 선택해주세요.</S.ErrorMsg>}
                </S.Form>
                <S.Form>
                  <S.FormTitle>휴대폰 번호</S.FormTitle>
                  <S.UserId
                    {...register("phone", { required: true })}
                    placeholder="‘-’ 없이 숫자만"
                  ></S.UserId>
                  {/* <S.EmailForm>
                  <S.Email></S.Email>
                  <S.EmailButton>인증번호</S.EmailButton>
                </S.EmailForm> */}
                  {errors.phone && (
                    <S.ErrorMsg>전화번호를 입력해주세요.</S.ErrorMsg>
                  )}
                </S.Form>
                {/* <S.EmailForm>
                  <S.Email placeholder="인증번호 입력"></S.Email>
                  <S.EmailButton>확인</S.EmailButton>
                </S.EmailForm> */}
                <S.Form>
                  <S.FormTitle>가입경로 (선택)</S.FormTitle>
                  <S.Job
                    {...register("path")}
                    placeholder="가입경로를 선택해 주세요."
                  >
                    <S.Header onClick={handelPathSelectBoxClick}>
                      <S.Label>{currentPathValue}</S.Label>
                      <S.DropDown src="/image/Dropdown.svg" />
                    </S.Header>
                    {showPathOptions === true ? (
                      <S.JobSelectOptions>
                        {PATH_LIST.map((data) => (
                          <S.JobOption
                            key={data.title}
                            value={data.title}
                            onClick={handleOnChangeSelectPathValue}
                          >
                            {data.title}
                          </S.JobOption>
                        ))}
                      </S.JobSelectOptions>
                    ) : (
                      <S.SelectOptionsNone></S.SelectOptionsNone>
                    )}
                  </S.Job>
                  {errors.job && <S.ErrorMsg>직업을 선택해주세요.</S.ErrorMsg>}
                </S.Form>
                <S.Agreement>
                  <FormGroup>
                    {Object.entries(checklist).map(([key, value]) => (
                      <FormControlLabel
                        key={key}
                        control={
                          <Checkbox
                            checked={value}
                            onChange={handleCheckboxChange}
                            name={key}
                            color="success"
                            required={key !== "광고성 정보 수신에 동의합니다."}
                          />
                        }
                        label={
                          key !== "광고성 정보 수신에 동의합니다."
                            ? `(필수) ${key}`
                            : key
                        }
                      />
                    ))}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Object.values(checklist).every(
                            (value) => value
                          )}
                          onChange={handleAllChecked}
                          name="all"
                          color="success"
                        />
                      }
                      label="모두 동의합니다."
                    />
                  </FormGroup>
                </S.Agreement>
                <S.NextButton type="submit">가입 완료</S.NextButton>
              </S.Box>
            )}
          </S.RightContainer>
        </S.SubWrapper>
      </S.Wrapper>
    </form>
  );
};

export default SignUp;
