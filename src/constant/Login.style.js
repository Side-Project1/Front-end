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

export const SubTitle = styled.div`
  color: #213660;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  margin-bottom: 37px;
  margin-top: 19px;
`;

export const SubDescription = styled.div`
  color: #213660;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
`;

export const RightContainer = styled.div`
  font-size: 32px;
  line-height: 100%;
  color: #181818;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 639px;
  height: 865px;
  background: #ffffff;
  border-radius: 42px;
  width: 415px;
  padding: 0px 111px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const EmailDescription = styled.div`
  color: #213660;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  text-align: end;
  margin-bottom: 9px;
`;

export const LoginTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 16px;
  margin-bottom: 16px;
  display: flex;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 415px;
  margin-bottom: 15px;
`;

export const EmailBox = styled.input`
  height: 54px;
  background: #ffffff;
  border: 1px solid rgba(170, 170, 170, 0.47);
  border-radius: 21px;
`;

export const PasswordDescription = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #808080;
`;

export const LoginButton = styled.button`
  background: #a2df3c;
  border-radius: 21px;
  width: 415px;
  height: 54px;
  border-style: none;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #2f2f2f;
`;

export const LoginDescription = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #808080;
`;

export const SocialLoginBox = styled.div`
  width: 415px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const SocialLoginText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-bottom: 13px;
`;

export const SocialLoginButton = styled.button`
  background: #ffee3a;
  border-radius: 21px;
  width: 415px;
  height: 54px;
  border-style: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  cursor: pointer;
`;
