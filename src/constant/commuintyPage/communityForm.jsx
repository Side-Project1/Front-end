import React, { useState } from "react";
import axios from "axios";
import Input from "@mui/joy/Input";
import { useNavigate } from "react-router-dom";

import {
  StudyFormFont,
  StudyFormWrapper,
  StudyRegisterButton,
  StudyRegisterWrap,
  StudyTextForm,
  StudyTextFormWrap,
  StudyTitleTextWrap,
} from "../StudyPage/StudyFormStyle";
import { API_URL } from "../../config/constant";

const CommunityForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기서 로컬 스토리지에 저장되어 있는 토큰을 가져오는데....
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `${API_URL}${POST_}`,
        {
          title,
          contents,
          sub_category,
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
      navigate("/Community");
    } catch (error) {
      console.log("게시글 등록 실패");
      console.error(error.response.data.data);
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StudyFormWrapper>
          <StudyTextFormWrap>
            <StudyFormFont>커뮤니티 글쓰기</StudyFormFont>
            <StudyTitleTextWrap>
              <div>제목</div>
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
      </form>
    </div>
  );
};

export default CommunityForm;
