import React, { useEffect, useState } from "react";
import { DetailFormWrap} from "./promotionDetailstyle";
import { useParams } from "react-router-dom";
import PromotionDetailTextForm from "../../components/feature/PromotionDetailUI";
import axios from "axios";
import { API_URL } from "../../config/constant";
import { GET_PROMOTION_FORM } from "../../api/apiUrl";
import CommentWrite from "../../components/feature/CommentWrite";
import { StudyDetailCommentWrap2 } from "../StudyPage/StudyDetailPageStyle";
import CommentItem from "../../components/feature/CommentItem";

const PromotionDetailPage = () => {

  const { id } = useParams();
  const [plus, setPlus] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [recruitType, setRecruitType] = useState(true);
  const [textWrite, setTextWrite] = useState(" ");
  const [comments, setComments] = useState([]);
  const [replyBtn, setReplyBtn] = useState(Array(comments.length).fill(false));
  const [reComments, setReComments] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}${GET_PROMOTION_FORM}`);
        const responseData = response.data;
        setDetailData(responseData);
        console.log('성공했습니다');
      } catch (error) {
        console.log(error, '실패하였습니다');
      }
    };
    fetchData();
  }, [id]);
  
  return (
    <DetailFormWrap>
      <PromotionDetailTextForm
        value={id} 
        plus={plus}
        setPlus={setPlus}
        data={detailData}
        setDetailData={setDetailData} />
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
    </DetailFormWrap>
  );
};

export default PromotionDetailPage;

