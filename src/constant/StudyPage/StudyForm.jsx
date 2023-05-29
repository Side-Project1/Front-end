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
  const [file, setFile] = useState("");
  const [max, setMax] = useState("");

  const [sub_category, setSubCategory] = useState([1]);
  const [region, setRegion] = useState("서울");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    try {
      const studyRequest = new FormData();
      const data = {
        sub_category: sub_category,
        region: region,
        title: title,
        contents: contents,
        max: max,
      };

      studyRequest.append(
        "studyRequest",
        new Blob([JSON.stringify(data)], {
          type: "application/json",
        })
      );

      studyRequest.append("file", file);

      const response = await axios.post(
        `${API_URL}${POST_STUDY_FORM}`,
        studyRequest,
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
                onClick={(e) => setSubCategory(e.target.value)}
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
                onClick={(e) => setRegion(e.target.value)}
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
                  id="max"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
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
            <S.StudyContentsWrap>
              <div>파일 업로드</div>
              <Input type="file" id="file" onChange={handleFileChange} />
            </S.StudyContentsWrap>
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
