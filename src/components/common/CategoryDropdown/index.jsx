import TriangleIcon from "../../../assets/images/TriangleIcon";
import Dropdown from "./Dropdown";
import EasyDropDownUI from "./MUIDropDown";
import RegionDropDown from "./RegionDropDown";
import { CategoryDropdownWrap, SemiCategoryWrapper } from "./styles";


const CategoryDropDownUI = ({toggleView,views}) =>{

  return(
    <>
    <SemiCategoryWrapper>
          {/* <CategoryDropdownWrap onClick={() => toggleView("view1")}>
            카테고리 <TriangleIcon />
            {views.view1 && <Dropdown />}
          </CategoryDropdownWrap> */}
          <EasyDropDownUI/>
          <RegionDropDown/>
          {/* <CategoryDropdownWrap onClick={() => toggleView("view3")}>
            지역 <TriangleIcon />
            {views.view3 && <Dropdown />}
          </CategoryDropdownWrap> */}
        </SemiCategoryWrapper>
    </>
  )



}

export default CategoryDropDownUI;