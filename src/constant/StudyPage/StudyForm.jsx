import React, { useState } from "react";
import axios from "axios";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/joy/Checkbox";
import Input from "@mui/joy/Input";
import { useNavigate } from "react-router-dom";

import {
  LineStudy,
  StudyContentsWrap,
  StudyFormFont,
  StudyFormRadio,
  StudyFormWrapper,
  StudyRegisterButton,
  StudyRegisterWrap,
  StudyTextForm,
  StudyTextFormWrap,
  StudyTitleTextWrap,
} from "./StudyFormStyle";
import { API_URL } from "../../config/constant";
import { POST_STUDY_FORM } from "../../api/apiUrl";

const StudyForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [sub_category, setSubCategory] = useState("음악");
  const [recruitment, setRecruitment] = useState("");
  const [region, setRegion] = useState("서울");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기서 로컬 스토리지에 저장되어 있는 토큰을 가져오는데....
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `${API_URL}${POST_STUDY_FORM}`,
        {
          sub_category,
          region,
          recruitment,
          title,
          contents,
        },
        // headers에도 보내고 있음
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("게시글이 등록되었습니다.");
      console.log(response.data);
      setTitle("");
      setContents("");
      setSubCategory([]);
      navigate("/Promotion");
    } catch (error) {
      console.log("게시글 등록 실패");
      console.error(error.response.data.data);
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <StudyFormWrapper>
          <StudyTextFormWrap>
            <StudyFormFont>스터디 글쓰기</StudyFormFont>
            <StudyContentsWrap>
              <div>카테고리</div>
              <Select
                value={sub_category}
                onChange={(e) => e && setSubCategory(e.target.value)}
                style={{ width: "538px" }}
              >
                <Option value="Music">음악</Option>
                <Option value="design">디자인</Option>
                <Option value="Art">미술</Option>
                <Option value="KPOP">실용음악</Option>
              </Select>
            </StudyContentsWrap>
            <StudyContentsWrap>
              <div>지역</div>
              <Select
                value={region}
                onChange={(e) => e && setRegion(e.target.value)}
                style={{ width: "538px" }}
              >
                <Option value="Seoul">서울</Option>
                <Option value="Kyunggi">경기</Option>
                <Option value="Incheon">인천</Option>
                <Option value="busan">부산</Option>
                <Option value="Daegu">대구</Option>
                <Option value="Daejeon">대전</Option>
                <Option value="Gwangju">광주</Option>
                <Option value="Gangwon">강원</Option>
                <Option value="kyungbook">경북</Option>
                <Option value="Jeonbook">전북</Option>
                <Option value="chungbook">충북</Option>
                <Option value="sejong">세종</Option>
                <Option value="ulsan">울산</Option>
                <Option value="kyungnam">경남</Option>
                <Option value="Jeonnam">전남</Option>
                <Option value="chungNam">충남</Option>
                <Option value="Jeju">제주</Option>
                <Option value="overSea">해외</Option>
              </Select>
            </StudyContentsWrap>
            <StudyContentsWrap>
              <div>모집인원</div>
              <StudyFormRadio>
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
              </StudyFormRadio>
            </StudyContentsWrap>
            <LineStudy></LineStudy>
            <StudyTitleTextWrap>
              <div>스터디 모집 제목</div>
              <Input
                variant="outlined"
                style={{ width: "538px" }}
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </StudyTitleTextWrap>
            <div>
              <StudyTextForm
                placeholder="내용을 입력해 주세요. (시간, 장소 등등 필요한 정보 입력)"
                minRows={2}
                type="text"
                id="contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              />
            </div>
            <StudyRegisterWrap>
              <StudyRegisterButton type="submit">등록</StudyRegisterButton>
              <StudyRegisterButton>미리보기</StudyRegisterButton>
            </StudyRegisterWrap>
          </StudyTextFormWrap>
        </StudyFormWrapper>
      </div>
    </form>
  );
};

export default StudyForm;
