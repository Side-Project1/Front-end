import {
  CardDetailText,
  CardTitle,
  CardWrap,
  CategoryBox,
  CategoryWrap,
  CompanyText,
} from "./common/totalstyle";
import Profile from "../assets/images/profileicon.png";
import { ProfileCardImg } from "../constant/promotionPage/Promotionstyle";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios를 import 합니다.
import { API_URL } from "../config/constant";
import { GET_ALL_PROMOTION_FORM } from "../api/apiUrl";

const PromotionCard = (props) => {
  const { data, ...restProps } = props;
  const navigate = useNavigate();

  // const fetchPromotionData = useCallback(async () => {
  //   try {
  //     const response = await axios.get(`${API_URL}${GET_ALL_PROMOTION_FORM}`, {
  //       params: data,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   fetchPromotionData();
  // }, [fetchPromotionData]);

  return (
    <CardWrap>
      <ProfileCardImg src={Profile} />
      <CompanyText>{data?.sub_category}</CompanyText>
      <CardTitle>{data?.title}</CardTitle>
      <CategoryWrap>
        <CategoryBox>{data?.contents}</CategoryBox>
      </CategoryWrap>
      <CardDetailText>{data?.user_id} | 부산</CardDetailText>
    </CardWrap>
  );
};

export default PromotionCard;
