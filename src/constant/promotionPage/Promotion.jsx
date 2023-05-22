
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromotionCard from "../../components/PromotionCard";
import PromotionUI from "../../components/feature/Promotion";
import axios from "axios";
import { CardContainerPromotion, PromotionCategoryWrapper } from "./Promotionstyle";


const Promotion = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://13.209.81.190:8080/api/v1/prom`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

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
        {data.map((v, i) => (
          < PromotionCard data={v} key={i} />
        ))}
      </CardContainerPromotion>
    </PromotionCategoryWrapper>
  );
};

export default Promotion;
