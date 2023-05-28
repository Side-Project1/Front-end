import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromotionCard from "../../components/PromotionCard";
import PromotionUI from "../../components/feature/Promotion";
import axios from "axios";
import {
  CardContainerPromotion,
  PromotionCategoryWrapper,
} from "./Promotionstyle";
import { API_URL } from "../../config/constant";
import { GET_ALL_PROMOTION_FORM } from "../../api/apiUrl";

const Promotion = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}${GET_ALL_PROMOTION_FORM}`);
        console.log(response.data);
        setData(response.data.params); // params를 사용하도록 변경
      } catch (error) {
        console.error("게시글을 가져오는데 실패했습니다.");
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
        {data && data.map((v, i) => <PromotionCard data={v} key={i} />)}
      </CardContainerPromotion>
    </PromotionCategoryWrapper>
  );
};

export default Promotion;
