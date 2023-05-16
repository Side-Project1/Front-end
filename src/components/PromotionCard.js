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
import { Stack } from "@mui/joy";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PromotionCard = (props) => {
  const { data, ...restProps } = props;
  console.log(data)
  const navigate = useNavigate();
  //   const fetchData = useCallback(() => {
  //     MemberApi.getName().then((res) => {
  //       if (res.status === 200) {
  // navigate(`/member/promemotion/${state.id}`,{state:res.data})
  //       }
  //     })
  //     let result = MeberApi.getName()
  //     if (result.status === 200) {

  //     }
  //   }, [])

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData])

  return (
    <CardWrap>
      <ProfileCardImg src={Profile} />
      <CompanyText>{data.wet}</CompanyText>
      <CardTitle>{data.title}</CardTitle>
      <CategoryWrap>
        <CategoryBox>{data.category}</CategoryBox>
      </CategoryWrap>
      <CardDetailText>
        {data.place} | {data.qualifications_needed}
      </CardDetailText>
    </CardWrap>
  );
};

export default PromotionCard;
