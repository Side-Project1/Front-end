import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #a7bffd;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 110px;
  padding-right: 110px;
  padding-bottom: 200px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 150px;
  line-height: 106%;
  color: rgba(255, 255, 255, 0.5);
  text-align: start;
  margin-bottom: 40px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
`;

export const TopButton = styled.button`
  width: 274px;
  height: 68px;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  color: #032363;
  background: #cfdcfe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 110px;
  border-style: none;
  cursor: pointer;
  margin-bottom: 60px;

  &:active {
    background: #032363;
    color: #ffffff;
  }
`;

export const BottomButton = styled.button`
  width: 274px;
  height: 68px;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  color: #032363;
  background: #cfdcfe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 110px;
  border-style: none;
  cursor: pointer;

  &:active {
    background: #032363;
    color: #ffffff;
  }
`;

export const NextButton = styled.button`
  width: 274px;
  height: 68px;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  background: #2f406e;
  border-radius: 33px;
  color: #ffffff;
  border-style: none;
  cursor: pointer;
`;

export const RightSection = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 67px;
  column-gap: 37px;
`;

export const LeftButton = styled.button`
  width: 232px;
  height: 59px;
  color: #032363;
  background: #cddbff;
  box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  border-style: none;
  cursor: pointer;

  &:active {
    background: #032363;
    color: #ffffff;
  }
`;

export const RightButton = styled.button`
  width: 232px;
  height: 59px;
  color: #032363;
  background: #cddbff;
  box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  border-style: none;
  cursor: pointer;

  &:active {
    background: #032363;
    color: #ffffff;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 37px;
`;

export const FormTitle = styled.div`
  width: 104px;
  color: #fff;
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: end;
`;

export const Name = styled.input`
  width: 309px;
  height: 31px;
  border-style: none;
`;

export const Id = styled.input`
  width: 309px;
  height: 31px;
  border-style: none;
`;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 37px;
`;

export const Password = styled.input`
  width: 309px;
  border-style: none;
  height: 31px;
`;

export const Number = styled.input`
  width: 309px;
  border-style: none;
  height: 31px;
`;

export const Email = styled.input`
  width: 309px;
  height: 31px;
  border-style: none;
`;

export const Birth = styled.input`
  width: 309px;
  height: 31px;
  border-style: none;
`;

export const SexButton = styled.div``;

export const MaleButton = styled.button`
  color: #032363;
  background: #dce6ff;
  opacity: 0.9;
  border-radius: 18px;
  border-style: none;
  cursor: pointer;

  &:active {
    background: #032363;
    color: #ffffff;
  }
`;

export const FemaleButton = styled.button`
  color: #032363;
  background: #dce6ff;
  opacity: 0.9;
  border-radius: 18px;
  border-style: none;
  cursor: pointer;

  &:active {
    background: #032363;
    color: #ffffff;
  }
`;
