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

const CommentWrite = ({
  comments,
  onComments,
}) => {
  const [textWrite, setTextWrite] = useState("");


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
              defaultChecked
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
            <span>비밀댓글</span>
          </CheckboxWrapper>
          <StudySubmitButton
            onClick={() => {
              if (textWrite.trim()) {
                onComments([...comments, textWrite.trim()]);
              }
              setTextWrite("");
            }}
          >
            댓글작성
          </StudySubmitButton>
        </StudySubmitWrapper>
      </StudyTextContentsWrapper3>
    </StudyDetailCommentWriteWrap>
  );
};

export default CommentWrite;
