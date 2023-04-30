import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  /* position: relative; */
  margin-bottom: 65px;
  height: 542px;
  background: #ffe5d8;
  justify-content: center;

  /* padding-bottom: 13px; */
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBox = styled.div`
  display: flex;
  max-width: 1200px;
`;

export const SlideBox = styled.div`
  display: flex;
`;

export const Vector = styled.img`
  width: 13px;
  height: 10px;
  place-self: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 12px 10px 11px 10px;
  cursor: pointer;
  margin: 0px 5px;
`;

export const Slide = styled.div`
  width: 688px;
  height: 504px;
  background: rgba(255, 255, 255, 0.66);
  border-radius: 22px;
  margin-top: 18px;
  /* position: absolute;
  top: 0;
  left: 658px; */
`;

export const InfoTitle = styled.div`
  text-align: start;
  margin-top: 74px;
  margin-left: 50px;
  font-weight: 500;
  font-size: 33px;
  line-height: 149%;
  letter-spacing: -0.05em;
  color: #000000;
  width: 240px;
`;

export const InfoImg = styled.img`
  align-self: end;
  height: 383px;
  width: 532px;
  /* position: absolute;
  left: 200px; */
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SerchBox = styled.div``;

export const Search = styled.input`
  width: 753px;
  height: 59px;
  background: #fcfcfc;
  border: 1px solid #c8c8c8;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  padding-left: 24px;
`;
export const SearchSubText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 176.52%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: rgba(238, 110, 3, 0.72);
`;

export const SubText = styled.div`
  display: flex;
  justify-content: center;
  gap: 53px;
  margin-top: 12px;
`;

export const CategoryBox = styled.div`
  display: flex;
  width: 1005px;
  height: 148px;
  background: rgba(255, 255, 255, 0.29);
  border: 2px solid #ffc742;
  border-radius: 64px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 80px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
`;
export const CategoryIcon = styled.img``;

export const CategoryTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 149%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.06em;
  color: #454545;
  justify-content: center;
`;
