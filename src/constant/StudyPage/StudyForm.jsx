import React, { useState } from "react";
import axios from "axios";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/joy/Checkbox";
import Input from "@mui/joy/Input";
import { useNavigate } from "react-router-dom";
import * as S from "./StudyFormStyle";
import { API_URL } from "../../config/constant";
import { POST_STUDY_FORM } from "../../api/apiUrl";
import { STUDY_CATEGORY_LIST, STUDY_REGION_LIST } from "./StudyList";

const StudyForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [sub_category, setSubCategory] = useState("음악");
  const [recruitment, setRecruitment] = useState("");
  const [region, setRegion] = useState("서울");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    try {
      const formData = new FormData();
      formData.append("sub_category", sub_category);
      formData.append("region", region);
      formData.append("recruitment", recruitment);
      formData.append("title", title);
      formData.append("contents", contents);

      const response = await axios.post(
        `${API_URL}${POST_STUDY_FORM}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("게시글이 등록되었습니다.");
      console.log(response.data);
      setTitle("");
      setContents("");
      setSubCategory("");
      navigate("/Study");
    } catch (error) {
      console.log("게시글 등록 실패");
      console.log(error);
      console.error(error.response.data.data);
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <S.StudyFormWrapper>
          <S.StudyTextFormWrap>
            <S.StudyFormFont>스터디 글쓰기</S.StudyFormFont>
            <S.StudyContentsWrap>
              <div>카테고리</div>
              <Select
                value={sub_category}
                onChange={(e) => setSubCategory(e.target.value)}
                style={{ width: "538px" }}
              >
                {STUDY_CATEGORY_LIST.map((data) => (
                  <Option key={data.category} value={data.category}>
                    {data.category}
                  </Option>
                ))}
              </Select>
            </S.StudyContentsWrap>
            <S.StudyContentsWrap>
              <div>지역</div>
              <Select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                style={{ width: "538px" }}
              >
                {STUDY_REGION_LIST.map((data) => (
                  <Option key={data.data} value={data.data}>
                    {data.data}
                  </Option>
                ))}
              </Select>
            </S.StudyContentsWrap>
            <S.StudyContentsWrap>
              <div>모집인원</div>
              <S.StudyFormRadio>
                <Input
                  placeholder="인원수"
                  variant="outlined"
                  style={{ width: "538px" }}
                  type="text"
                  id="recruitment"
                  value={recruitment}
                  onChange={(e) => setRecruitment(e.target.value)}
                />
                <Checkbox label="제한없음" variant="outlined" defaultChecked />
              </S.StudyFormRadio>
            </S.StudyContentsWrap>
            <S.LineStudy></S.LineStudy>
            <S.StudyTitleTextWrap>
              <div>스터디 모집 제목</div>
              <Input
                variant="outlined"
                style={{ width: "538px" }}
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.StudyTitleTextWrap>
            <div>
              <S.StudyTextForm
                placeholder="내용을 입력해 주세요. (시간, 장소 등등 필요한 정보 입력)"
                minRows={2}
                type="text"
                id="contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              />
            </div>
            <S.StudyRegisterWrap>
              <S.StudyRegisterButton type="submit">등록</S.StudyRegisterButton>
              <S.StudyRegisterButton>미리보기</S.StudyRegisterButton>
            </S.StudyRegisterWrap>
          </S.StudyTextFormWrap>
        </S.StudyFormWrapper>
      </div>
    </form>
  );
};

export default StudyForm;
