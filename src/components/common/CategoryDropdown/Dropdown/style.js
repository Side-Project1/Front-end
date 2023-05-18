import styled from "styled-components";

export const CategoryDropdownWrap = styled.div`
  width: 452px;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
`;




export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #b3b3b3;
  }
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const SubcategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1;
`;
export const SubcategoryItem = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  cursor: pointer;

  & > input[type="checkbox"] {
    margin-right: 8px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;
