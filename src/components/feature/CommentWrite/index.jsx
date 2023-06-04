import { Checkbox, TextField } from "@mui/material";
import * as S from "./styles";
import ProfileIcon from "@/assets/images/ProfileStateicon.png";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../config/constant";
import { POST_STUDY_FORM_COMMENT } from "../../../api/apiUrl";

const CommentWrite = () => {
  const [comments, setComments] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleCommentSubmit = () => {
    const token = localStorage.getItem("accessToken");

    const data = {
      comments: comments,
      comment_id: 1,
      study_id: 2,
      is_privated: isPrivate ? "Y" : "N",
    };

    axios
      .post(`${API_URL}${POST_STUDY_FORM_COMMENT}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log("댓글이 작성되었습니다.");
      })
      .catch((error) => {
        console.error(error);
        console.error("댓글 작성에 실패했습니다.", error);
      });
    // 댓글은 초기화를 꼭! 해줘야함. 리다이렉트가 없으니,,,
    setComments("");
    setIsPrivate(false);
  };

  return (
    <S.StudyDetailCommentWriteWrap>
      <S.StudyTextContentsWrapper3>
        <S.StudyProfileTextWapper>
          <S.StudyProfileIcon src={ProfileIcon} />
          <S.StudyProfileNameWrap>
            <span>닉네임</span>
          </S.StudyProfileNameWrap>
        </S.StudyProfileTextWapper>
        <S.StudyTextAreaWrapper>
          <TextField
            placeholder="댓글을 작성해주세요"
            multiline
            variant="standard"
            style={{ width: "1000px" }}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </S.StudyTextAreaWrapper>
        <S.StudySubmitWrapper>
          <S.CheckboxWrapper>
            <Checkbox
              inputProps={{ "aria-label": "Checkbox demo" }}
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
            <span>비밀댓글</span>
          </S.CheckboxWrapper>
          <S.StudySubmitButton onClick={handleCommentSubmit}>
            댓글작성
          </S.StudySubmitButton>
        </S.StudySubmitWrapper>
      </S.StudyTextContentsWrapper3>
    </S.StudyDetailCommentWriteWrap>
  );
};

export default CommentWrite;
