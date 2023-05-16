import styled from "styled-components";

export const TitleProfileWrap = styled.div`
  margin: 0 auto;
  gap: 3px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const H2Title = styled.h2`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  margin-top: 286px;
  margin-left: 72px;
  margin-bottom: 52px;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-top: 100px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`;
export const PromotionDetailContentWrapper = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  display: flex;
  margin: 90px 39px;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;

export const WidthHundredPerWrap = styled.div`
  width: 100%;
`;


export const PromotionDetailWholeWrap = styled.div`
  width: 741px;
  border: 1px solid #d6bd65;
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.07);
  border-radius: 9px;
  margin-top: 57px;
  margin-left: 45px;
  margin-bottom: 48px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;