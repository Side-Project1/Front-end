import React, { useState } from "react";
import { DetailFormWrap, H2Title, PromotionDetailWrapper, TitleProfileWrap } from "../styles/promotionDetailstyle";
import { useParams } from "react-router-dom";
import PromotionDetailTextForm from "../components/feature/PromotionDetailUI";


const PromotionDetailPage = () => {

  const { id } = useParams();
  const [plus, setPlus] = useState([]);

  return (
    <DetailFormWrap>
      <PromotionDetailTextForm value={id} plus={plus} setPlus={setPlus} />
    </DetailFormWrap>
  );
};

export default PromotionDetailPage;
