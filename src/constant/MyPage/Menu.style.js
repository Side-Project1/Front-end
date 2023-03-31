import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 291px;
  background: #f9f9f9;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.15);
  padding-top: 101px;
`;

export const Container = styled.div`
  display: flex;
`;

export const MenuSection = styled.div``;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 213px;
  gap: 40px;
  margin-bottom: 51px;
  margin-left: 26px;
  padding: 9px 0px 9px 28px;
  cursor: pointer;

  &:hover {
    background-color: #ffc642;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    padding: 9px 0px 9px 28px;
  }
`;

export const MenuIcon = styled.img``;

export const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 150%;
`;
