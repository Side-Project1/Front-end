import React, { useEffect, useState } from "react";
import { DetailFormWrap, H2Title, PromotionDetailWrapper, TitleProfileWrap } from "../styles/promotionDetailstyle";
import { useParams } from "react-router-dom";
import PromotionDetailTextForm from "../components/feature/PromotionDetailUI";
import axios from "axios";


const PromotionDetailPage = () => {

  const { id } = useParams();
  const [plus, setPlus] = useState([]);
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    axios.get(`http://13.209.81.190:8080/api/v1/prom/1`)
      .then(response => {
        const responseDetailData = response.data
        setDetailData(responseDetailData);
        console.log('성공했습니다')

      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <DetailFormWrap>
      <PromotionDetailTextForm
        value={id} plus={plus} setPlus={setPlus} data={detailData} setDetailData={setDetailData} />
    </DetailFormWrap>
  );
};

export default PromotionDetailPage;

