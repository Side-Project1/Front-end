import React, { useState } from "react";
import * as S from "./StudyForm.style";
import { STUDY_FORM_CATEGORY, STUDY_FORM_REGION, STUDY_PEOPLE } from "./Form";

const StudyForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    console.log("폼을 제출했습니다.");
  };

  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.FormWrapper>
          <S.Text>스터디 게시판</S.Text>
          {/* <S.Title>Date</S.Title>
          <S.DateInput type="Date" placeholder="Date" /> */}
          <S.Title>카테고리</S.Title>
          <S.Select value={selectedOption} onChange={handleSelectChange}>
            <S.Option value="" disabled selected>
              category
            </S.Option>
            {STUDY_FORM_CATEGORY.map((data) => (
              <S.Option key={data.title}>{data.title}</S.Option>
            ))}
          </S.Select>
          <S.Title>지역</S.Title>
          <S.Select value={selectedOption} onChange={handleSelectChange}>
            <S.Option value="" disabled selected>
              region
            </S.Option>
            {STUDY_FORM_REGION.map((data) => (
              <S.Option key={data.title}>{data.title}</S.Option>
            ))}
          </S.Select>
          <S.Title>모집 인원</S.Title>
          <S.Select value={selectedOption} onChange={handleSelectChange}>
            <S.Option value="" disabled selected>
              category
            </S.Option>
            {STUDY_PEOPLE.map((data) => (
              <S.Option key={data.title}>{data.title}</S.Option>
            ))}
          </S.Select>
          <S.Bar></S.Bar>
          <S.Title>스터디 모집 제목</S.Title>
          <S.Input type="Title" />
          <S.InputText type="Text" />
          <S.ButtonBox>
            <S.Button onClick={() => console.log("폼을 제출했습니다.")}>
              취소
            </S.Button>
            <S.Button onClick={handleSubmit}>등록</S.Button>
          </S.ButtonBox>
        </S.FormWrapper>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default StudyForm;
