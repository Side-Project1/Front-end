import React, { useEffect, useState } from "react";
import { DetailFormWrap} from "./promotionDetailstyle";
import { useParams } from "react-router-dom";
import PromotionDetailTextForm from "../../components/feature/PromotionDetailUI";
import axios from "axios";
import { API_URL } from "../../config/constant";
import { GET_PROMOTION_FORM } from "../../api/apiUrl";

const PromotionDetailPage = () => {

  const { id } = useParams();
  const [plus, setPlus] = useState([]);
  const [detailData, setDetailData] = useState([]);



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
    </DetailFormWrap>
  );
};

export default PromotionDetailPage;

