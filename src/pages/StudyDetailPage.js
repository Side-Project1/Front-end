import React, { useEffect, useState } from "react";
import StudyTextCard from "../components/TextCard";
import ProfileIcon from "@/assets/images/ProfileStateicon.png";
import {
  StudyDetailCommentWrap2,
  StudyDetailPageWrap,
  StudyDetailWrapper,

} from "@/styles/StudyDetailPageStyle";
import CommentWrite from "@/components/feature/CommentWrite";
import { useParams } from "react-router-dom";
import CommentItem from "../components/feature/CommentItem";
import axios from "axios";

const data = {
  category: "영상",
  content: "string",
  dead_line: "2023-04-16",
  email: "string",
  en_dt: "2023-04-16",
  person_num: 40,
  text_num: 11,
  phone: "string",
  place: "서울 구로구",
  preferential: "string",
  qualifications_needed: "경력 1~10년",
  recruitment: "string",
  salary: "string",
  st_dt: "2023-04-16",
  title: "스터디 구합니다",
  wet: "디오넷",
  work_content: "string",
  wst: "string",
};
// const commentsList = [
//   { id: 1, comments: [], body: '' }
// ]

const StudyDetailPage = () => {
  const [recruitType, setRecruitType] = useState(true);
  const [textWrite, setTextWrite] = useState(" ");
  const [comments, setComments] = useState([]);
  const [replyBtn, setReplyBtn] = useState(Array(comments.length).fill(false));
  const [reComments, setReComments] = useState([]);
  const { id } = useParams();
  const [detailData, setDetailData] = useState([])

  useEffect(() => {
    axios.get(`http://13.209.81.190:8080/api/v1/study/${id}`)
      .then(response => {
        const responseData = response.data
        setDetailData(responseData)
        console.log('성공했습니다')
      })
      .catch(error => {
        console.log(error, '실패하였습니다.')
      })
  }, [id])

  return (
    <StudyDetailPageWrap>
      <StudyDetailWrapper>
        <StudyTextCard
          data={data}
          recruitType={recruitType}
          ProfileIcon={ProfileIcon}
          id={id}
        />
        {comments?.map((el, i) => (
          <StudyDetailCommentWrap2 key={i}>
            <CommentItem
              el={el}
              setReplyBtn={setReplyBtn}
              replyBtn={replyBtn}
              i={i}
              setTextWrite={setTextWrite}
              textWrite={textWrite}
              reComments={reComments}
              setReComments={setReComments}
            />
          </StudyDetailCommentWrap2>
        ))}
        <CommentWrite
          comments={comments}
          onComments={setComments}
          replyBtn={replyBtn}
          setReplyBtn={setReplyBtn}
          textWrite={textWrite}
        />
      </StudyDetailWrapper>
    </StudyDetailPageWrap>
  );
};

export default StudyDetailPage;
