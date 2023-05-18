import styled from "styled-components";



export const CategoryContentsWrap = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  border: 2.5px solid rgba(238, 110, 3, 0.2);
  border-radius: 47.5px;
`;



export const CategoryContentsList = styled.li`
  padding: 17px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  border-radius: 24px;
  width: 281px;
  text-align: center;
  background: linear-gradient(
    90deg,
    #ffc642 0%,
    rgba(255, 238, 199, 0.0260417) 251.08%
  );
  transition: 3s;
`;