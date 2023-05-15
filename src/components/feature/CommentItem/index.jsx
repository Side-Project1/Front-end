import {
  CheckboxWrapper, 
  Flexcolumn, 
  ProfileFlexWrapper ,
  ReplyButton,
  ReplyWrapper,
  StudyProfileIcon,
  StudyProfileNameWrap,
  StudyProfileTextWapper,
  StudyReplyIconStyle,
  StudySubmitButton,
  StudySubmitWrapper,
  StudyTextAreaWrapper,
  StudyTextContentsWrapper3,
  TextReplyWrapper
} from './styles';
import { Checkbox, TextField } from "@mui/material";
import ProfileIcon from "@/assets/images/ProfileStateicon.png";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const copyStateChange = (list , i) => {
  console.log(list)
  const copy = [...list];
  copy[i] = !copy[i]
  return copy;
}

const CommentItem = ({
  el,
  setReplyBtn,
  replyBtn,
  i,
  setTextWrite,
   textWrite,
   setReComments,
   reComments}) => {

  
  return (
    <div>
    <Flexcolumn>
      <ProfileFlexWrapper>
        <StudyProfileIcon src={ProfileIcon} />
        <Flexcolumn>
          <span>글쓴이</span>
          <span>8:20</span>
        </Flexcolumn>
      </ProfileFlexWrapper>
    </Flexcolumn>
    <TextReplyWrapper>{el}</TextReplyWrapper>
    <ReplyButton
      onClick={() => {
        setReplyBtn(copyStateChange(replyBtn, i));
      }}
    >
      댓글
    </ReplyButton>
    {replyBtn[i] && (
      <ReplyWrapper>
        <StudyTextContentsWrapper3>
          <StudyProfileTextWapper>
            <StudyReplyIconStyle src={ProfileIcon} />
            <StudyProfileNameWrap>
              <span>닉네임</span>
            </StudyProfileNameWrap>
          </StudyProfileTextWapper>
          <StudyTextAreaWrapper>
            <TextField
              onChange={(e) => {
                setTextWrite(e.target.value);
              }}
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
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
              <span>비밀댓글</span>
            </CheckboxWrapper>
            <div></div>
            <StudySubmitButton
              onClick={() => {
                setReComments([...reComments, textWrite]);
                setTextWrite("");
              }}
            >
              댓글작성
            </StudySubmitButton>
          </StudySubmitWrapper>
        </StudyTextContentsWrapper3>
      </ReplyWrapper>
    )}
  </div>
  )
}

export default CommentItem;