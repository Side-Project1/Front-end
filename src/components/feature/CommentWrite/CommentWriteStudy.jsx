import { Checkbox, TextField } from "@mui/material";
import {
  StudyDetailCommentWriteWrap,
  StudyTextContentsWrapper3,
  StudyProfileTextWapper,
  StudyProfileIcon,
  StudyProfileNameWrap,
  StudyTextAreaWrapper,
  StudySubmitWrapper,
  CheckboxWrapper,
  StudySubmitButton,
} from "./styles";
import ProfileIcon from "@/assets/images/ProfileStateicon.png";
import { useState } from "react";
import { API_URL } from "../../../config/constant";
import axios from "axios";
import {POST_STUDY_FORM_COMMENT } from "../../../api/apiUrl";

const CommentWrite = ({ comments, onComments, replyBtn,setReplyBtn}) => {
  const [textWrite, setTextWrite] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleComment = async () => {
    const token = localStorage.getItem("accessToken");
  
    const commentData = {
      comment_id: 1, // 댓글 작성자 번호
      comments: textWrite, // 댓글 내용
      is_privated: isPrivate ? "Y" : "N", // 비밀 댓글 여부
      study_id: 1, // 게시글 번호
    };
    
    

    try {
      const response = await axios.post(`${API_URL}${POST_STUDY_FORM_COMMENT}`, commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API 요청 성공:", response.data);
      console.log(commentData);

    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  const handleSubmit = () => {
    if (textWrite.trim()) {
      onComments([...comments, textWrite.trim()]);
    }
    setTextWrite("");
    handleComment();
  };
  
  return (
    <StudyDetailCommentWriteWrap>
      <StudyTextContentsWrapper3>
        <StudyProfileTextWapper>
          <StudyProfileIcon src={ProfileIcon} />
          <StudyProfileNameWrap>
            <span>닉네임</span>
          </StudyProfileNameWrap>
        </StudyProfileTextWapper>
        <StudyTextAreaWrapper>
          <TextField
            onChange={(e) => setTextWrite(e.target.value)}
            value={textWrite}
            id="standard-textarea"
            placeholder="댓글을 작성해주세요"
            multiline
            variant="standard"
            style={{ width: "1000px" }}
          />
        </StudyTextAreaWrapper>
        <StudySubmitWrapper>
          <CheckboxWrapper>
            <Checkbox
              inputProps={{ "aria-label": "Checkbox demo" }}
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
            <span>비밀댓글</span>
          </CheckboxWrapper>
          <StudySubmitButton onClick={handleSubmit}>
            댓글작성
          </StudySubmitButton>
        </StudySubmitWrapper>
      </StudyTextContentsWrapper3>
    </StudyDetailCommentWriteWrap>
  );
};

export default CommentWrite;