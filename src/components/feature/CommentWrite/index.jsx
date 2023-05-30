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
import { POST_COMMENT_DETAILPAGE } from "../../../api/apiUrl";

const CommentWrite = ({ comments, onComments, replyBtn,setReplyBtn}) => {
  const [textWrite, setTextWrite] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleComment = async () => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    const commentData = {
      comment_id: 1, // 댓글 작성자 번호
      comments: textWrite, // 댓글 내용
      is_privated: isPrivate ? "Y" : "N", // 비밀 댓글 여부
      promotion_id: 2, // 게시글 번호
    };

    try {
      await axios.post(`${API_URL}${POST_COMMENT_DETAILPAGE}`, commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log("댓글 작성 실패:", error);
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