import TriangleIcon from "../../../styles/TriangleIcon";
import Dropdown from "./Dropdown";
import { CategoryDropdownWrap, SemiCategoryWrapper } from "./styles";


const CategoryDropDownUI = ({toggleView,views}) =>{

  return(
    <>
    <SemiCategoryWrapper>
          <CategoryDropdownWrap onClick={() => toggleView("view1")}>
            카테고리 <TriangleIcon />
            {views.view1 && <Dropdown />}
          </CategoryDropdownWrap>
          <CategoryDropdownWrap onClick={() => toggleView("view2")}>
            경력 <TriangleIcon />
            {views.view2 && <Dropdown />}
          </CategoryDropdownWrap>
          <CategoryDropdownWrap onClick={() => toggleView("view3")}>
            지역 <TriangleIcon />
            {views.view3 && <Dropdown />}
          </CategoryDropdownWrap>
        </SemiCategoryWrapper>
    </>
  )


}

export default CategoryDropDownUI;