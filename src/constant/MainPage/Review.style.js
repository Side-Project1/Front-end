import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 70px;
  background: linear-gradient(180deg, #efefef 0%, rgba(239, 239, 239, 0) 100%);
`;

export const TopSection = styled.div`
  margin-bottom: 122px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 149%;
  letter-spacing: -0.02em;
  color: #484848;
`;
export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: #929292;
`;

export const BottomSection = styled.div`
  display: flex;
  gap: 72px;
  align-self: center;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  padding: 22px;
  width: 394px;
  height: 545px;
  background: #ffffff;
  border: 1px solid #c5c5c5;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    transform: translateY(-50px);
    transition: all 0.3s linear;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const IconBox = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 11px;
  /* flex-direction: row; */
`;
export const GoodTag = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 176.52%;
  align-items: center;
  letter-spacing: -0.03em;
  color: #333333;
  background: #ffffff;
  border: 2px solid rgba(240, 180, 39, 0.6);
  border-radius: 9px;
  padding: 2px 10px;
`;

export const BadTag = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 176.52%;
  align-items: center;
  letter-spacing: -0.03em;
  color: #333333;
  background: #ffffff;
  border: 2px solid rgba(238, 110, 3, 0.6);
  border-radius: 9px;
  padding: 2px 10px;
`;

export const TagBox = styled.div`
  display: flex;
  padding: 0px 50px;
  flex-flow: wrap;
  gap: 5px;
`;

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Icon = styled.img``;

export const IconText = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 176.52%;
  letter-spacing: -0.03em;
  color: #323232;
`;

export const Bar = styled.div`
  width: 394px;
  height: 0px;
  border: 1px solid rgba(105, 105, 105, 0.15);
  margin: 26px 0px;
`;

export const Text = styled.div`
  display: flex;
  text-align: start;
  width: 394px;
  font-weight: 200;
  font-size: 15px;
  line-height: 176.52%;
  letter-spacing: -0.03em;
  color: #636363;
`;

export const Writer = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 14px;
`;

export const WriterImg = styled.img`
  width: 55px;
  height: 57px;
  background-color: pink;
  border: 1px solid #dadada;
  border-radius: 50px;
`;

export const WriterName = styled.div`
  align-self: center;
`;
