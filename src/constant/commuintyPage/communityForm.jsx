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

const CommunityForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <form>
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
