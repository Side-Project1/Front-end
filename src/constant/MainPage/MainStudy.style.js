import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 490px;
  width: 100%;
  background: rgba(255, 193, 49, 0.84);
`;

export const Section = styled.div`
  display: flex;
  gap: 25px;
  /* flex-direction: column; */
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 149%;
  align-items: center;
  letter-spacing: -0.02em;
  color: #252525;
  margin-top: 26px;
  margin-bottom: 64px;
`;

export const Card = styled.div`
  padding: 26px 42px;
  width: 384px;
  height: 189px;
  background: #ffffff;
  border: 2px solid #ffb200;
  border-radius: 26px;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    transition: all 0.3s linear;
  }
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CradTitle = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #393939;
`;

export const CardButton = styled.button`
  width: 141px;
  height: 42px;
  background: #ee6e03;
  border-radius: 47px;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  border-color: transparent;
  color: #ffffff;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #757575;
  text-align: start;
  height: 94px;
`;
export const BottomSection = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const Icon = styled.img`
  margin-right: 3px;
`;

export const ViewNumber = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #696969;
  margin-right: 14px;
`;

export const CommentNumber = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #696969;
  margin-left: 2px;
`;

export const GoStudyButton = styled.button`
  width: 402px;
  height: 52px;
  background: rgba(255, 255, 255, 0.33);
  border: 2px solid #ffb200;
  border-radius: 13px;
  font-weight: 700;
  font-size: 19px;
  line-height: 149%;
  letter-spacing: -0.02em;
  color: #484848;
  margin-top: 36px;
  cursor: pointer;
`;
