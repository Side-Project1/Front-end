import { SearchingBar, SearchingBarWrap } from "../../../styles/jobstyle"
import CategoryDropDownUI from "../../common/CategoryDropdown"
import PromotionClickCategory from "./PromotionCategory"
import { PromotionRegisterWrap, RegisterFlexWrap, RegiststerCursor, SemiWrapper, WriteTextButton } from "./style"

const PromotionUI = (
  {categoryContents,
    onCategoryClick,
    selectedCategory,
    toggleView,
    setViews,
    views ,
    navigate
  }
  ) =>{

return(
  <>
  <PromotionClickCategory
        categoryContents={categoryContents}
        onCategoryClick={onCategoryClick}
        selectedCategory={selectedCategory}
      />
      <SemiWrapper>
      
        <CategoryDropDownUI toggleView={toggleView} setViews={setViews} views={views} />
        <SearchingBarWrap>
          <SearchingBar placeholder="제목 + 본문검색" />
        </SearchingBarWrap>
      </SemiWrapper>
      <RegisterFlexWrap>
        <div>전체 100건</div>
        <PromotionRegisterWrap>
          <RegiststerCursor>최근 등록순</RegiststerCursor>
          <WriteTextButton
            onClick={() => {
              navigate("/promotionform");
            }}
          >
            글쓰기
          </WriteTextButton>
        </PromotionRegisterWrap>
      </RegisterFlexWrap>
</>
)
}
export default PromotionUI