import styled from "styled-components";

export const SemiCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryDropdownWrap = styled.ul`
  width: 144px;
  height: 40px;
  transition: 3s;
  background-color: #fcfbe9;
  border: 1px solid rgba(240, 180, 39, 0.5);
  border-radius: 13px;
  padding: 6px 5px 17px 13px;
  text-align: center;
  align-items: center;
  list-style: none;
  margin-right: 11px;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  color: rgba(100, 100, 100, 1);
  flex-shrink: 1;
  flex-wrap: nowrap;
`;

export const CategoryModalWrap = styled.div`
  position:fixed;
  border: 1px solid black;
  width: 452px;
  background: #FFFFFF;
  border-radius: 4px;
  display: flex;
  flex-direction: column; 
  opacity: ${({ open }) => open ? 1 : 0};
  visibility: ${({ open }) => open ? "visible" : "hidden"};
  transition: opacity 0.3s, visibility 0.3s ease;
  z-index: 100;
`;