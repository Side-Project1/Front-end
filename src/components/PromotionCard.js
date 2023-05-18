import {
  CardDetailText,
  CardTitle,
  CardWrap,
  CategoryBox,
  CategoryWrap,
  CompanyText,
} from "../styles/jobstyle";
import Profile from "../assets/images/profileicon.png";
import { ProfileCardImg } from "../styles/Promotionstyle";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PromotionCard = (props) => {
  const { data, ...restProps } = props;
  const navigate = useNavigate();

  console.log(data)
  return (
    <CardWrap>
      <ProfileCardImg src={Profile} />
      <CompanyText>{data?.sub_category}</CompanyText>
      <CardTitle>{data?.title}</CardTitle>
      <CategoryWrap>
        <CategoryBox>{data?.contents}</CategoryBox>
      </CategoryWrap>
      <CardDetailText>
        {data?.user_id} | 부산
      </CardDetailText>
    </CardWrap>
  );
};

export default PromotionCard;
