import styled from "styled-components";

export const Wrapper = styled.div`
  background: left bottom url("/image/ArtNJob_Boy.png");
  background-size: 937px 673px;
  background-color: #fcfbe9;
  background-repeat: no-repeat;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #383838;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 47px 81px 60px;
`;

export const LeftContainer = styled.div``;

export const TitleBox = styled.div`
  margin-top: 65px;
  width: 555px;
  height: 198px;
`;

export const TopTitle = styled.img`
  display: flex;
  justify-content: flex-start;
  width: 210px;
  height: 66px;
`;

export const BottomTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: start;
`;

export const RightContainer = styled.div`
  font-size: 32px;
  line-height: 100%;
  color: #181818;
`;

export const Box = styled.div`
  display: flex;
  gap: 9px;
  justify-content: center;
  flex-direction: column;
  width: 639px;
  height: 865px;
  background: #ffffff;
  border-radius: 42px;
  width: 415px;
  padding: 0px 111px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #181818;
  align-self: start;
  margin-bottom: 26px;
`;

export const FormTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  color: #333333;
  align-self: start;
`;

export const UserId = styled.input`
  width: 371px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 21px;
  padding-left: 44px;
`;

export const Agreement = styled.div`
  width: 415px;
  height: 186px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 21px;
`;

export const EmailForm = styled.div`
  display: flex;
  gap: 10px;
`;

export const Email = styled.input`
  width: 255px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 21px;
  padding-left: 44px;
`;

export const EmailButton = styled.button`
  width: 106px;
  height: 54px;
  background: #f58425;
  border: none;
  border-radius: 9px;
  font-weight: 600;
  font-size: 17px;
  line-height: 160%;
  color: #ffffff;
  cursor: pointer;
`;

export const NextButton = styled.button`
  width: 415px;
  height: 54px;
  background: #a2df3c;
  border-radius: 21px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  color: #2f2f2f;
  margin-top: 27px;
  cursor: pointer;
`;
