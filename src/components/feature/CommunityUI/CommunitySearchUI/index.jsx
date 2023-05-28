import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommunitySearch,
  DataDiv,
  GapWrapper,
  GreenRegisterBtn,
  SearchCommunityWrap,
  SearchUIWrapper,
} from "./styles";
import TriangleIcon from "../../../../assets/images/TriangleIcon";

const CommunitySearchUI = () => {
  const [sortByNewest, setSortByNewest] = useState(false);
  const navigate = useNavigate();
  return (
    <SearchUIWrapper>
      <DataDiv
        onClick={() => {
          setSortByNewest(!sortByNewest);
        }}
      >
        최근등록순
        <TriangleIcon />
      </DataDiv>
      <DataDiv>
        지역
        <TriangleIcon />
      </DataDiv>
      <GapWrapper>
        <SearchCommunityWrap>
          <CommunitySearch placeholder="제목 + 본문검색" />
        </SearchCommunityWrap>
        <GreenRegisterBtn
          onClick={() => {
            navigate("/communityForm");
          }}
        >
          글쓰기
        </GreenRegisterBtn>
      </GapWrapper>
    </SearchUIWrapper>
  );
};

export default CommunitySearchUI;
