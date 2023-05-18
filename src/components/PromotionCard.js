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
import axios from "axios";
const PromotionCard = (props) => {
  const { data, setData, ...restProps } = props;
  console.log(data)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://13.209.81.190:8080/api/v1/prom`)
      .then(response => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

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
