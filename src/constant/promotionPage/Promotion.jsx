import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromotionCard from "../../components/PromotionCard";
import PromotionUI from "../../components/feature/Promotion";
import axios from "axios";
import {
  CardContainerPromotion,
  PromotionCategoryWrapper,
} from "./Promotionstyle";
import {
  CardDetailText,
  CardTitle,
  CardWrap,
  CategoryBox,
  CategoryWrap,
  CompanyText,
} from "../../components/common/totalstyle";

import { API_URL } from "../../config/constant";
import { GET_ALL_PROMOTION_FORM } from "../../api/apiUrl";
import { useQuery } from "react-query";

const Promotion = () => {
  const navigate = useNavigate();
  const [views, setViews] = useState({
    view1: false,
    view2: false,
    view3: false,
  });

  const toggleView = (view) => {
    setViews({ ...views, [view]: !views[view] });
  };

  const categoryContents = ["전체", "홍보", "구인"];
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const { data: promotionData, isLoading } = useQuery(
    "promotionForm",
    async () => {
      const response = await axios.get(`${API_URL}${GET_ALL_PROMOTION_FORM}`);
      console.log(response.data);
      console.log(promotionData);

      return response.data.data;
    }
  );

  return (
    <PromotionCategoryWrapper>
      <PromotionUI
        categoryContents={categoryContents}
        onCategoryClick={onCategoryClick}
        selectedCategory={selectedCategory}
        toggleView={toggleView}
        setViews={setViews}
        views={views}
        navigate={navigate}
      />
      <CardContainerPromotion>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
        promotionData.map((data, index) => (
            <CardWrap key={index}>
              <CompanyText>{data?.sub_category}</CompanyText>
              <CardTitle>{data?.title}</CardTitle>
              <CategoryWrap>
                <CategoryBox>{data?.contents}</CategoryBox>
              </CategoryWrap>
            </CardWrap>
          ))
        )}
      </CardContainerPromotion>
    </PromotionCategoryWrapper>
  );
};

export default Promotion;
