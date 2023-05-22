import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f3f3f3;
  padding-top: 60px;
  padding-bottom: 120px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1062px;
  height: 1363px;
  padding: 40px 42px;
  background-color: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  align-self: start;
  margin-bottom: 58px;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  align-self: start;
  margin-top: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  display: flex;
  align-self: start;
  width: 538px;
  height: 39px;
  background: #ffffff;
  border: 1px solid rgba(170, 170, 170, 0.5);
  border-radius: 4px;
`;

export const DateInput = styled.input`
  align-self: start;
  width: 200px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const InputText = styled.input`
  width: 980px;
  height: 639px;
  background: #ffffff;
  border: 1px solid rgba(170, 170, 170, 0.5);
  border-radius: 4px;
`;

export const InputIntroduction = styled.input`
  width: 800px;
  min-height: 200px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  margin-bottom: 24px;
  align-self: start;
  width: 538px;
  height: 39px;
  border: 1px solid rgba(170, 170, 170, 0.5);
  border-radius: 4px;
  padding: 10px;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  }
  option:first-of-type {
    display: none;
  }
`;

export const Option = styled.option`
  width: 200px;
  padding: 10px;
`;

export const Button = styled.button`
  color: #fff;
  width: 148px;
  height: 46px;
  background: #ee6e03;
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #fc7303;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-self: end;
  margin-top: 200px;
  column-gap: 7px;
`;

export const Bar = styled.div`
  width: 982px;
  height: 0px;
  border: 3px solid #e9e9e9;
  margin: 75px 0px;
`;
