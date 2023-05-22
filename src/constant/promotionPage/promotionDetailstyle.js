import styled from "styled-components";

export const DetailFormWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Plus Jakarta Sans";

  @media screen and (max-width: 768px) {
    background-position: top;
  }
`;

export const DetailTitle = styled.h2`
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

export const DetailProfileWrap = styled.div`
  margin: 0 auto;
  gap: 3px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const PromotionDetailWrapper = styled.div`
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