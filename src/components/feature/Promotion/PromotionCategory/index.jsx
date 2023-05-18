import { CategoryContentsList, CategoryContentsWrap } from "./style";

const PromotionClickCategory = ({categoryContents,onCategoryClick,selectedCategory}) =>{

  return(
    <>
    <CategoryContentsWrap>
        {categoryContents.map((category) => (
          <CategoryContentsList
            key={category}
            onClick={() => onCategoryClick(category)}
            style={{
              background:
                category === selectedCategory
                  ? "linear-gradient(90deg, #FFC642 0%, rgba(255, 238, 199, 0.0260417) 251.08%)"
                  : "transparent",
            }}
          >
            {category}
          </CategoryContentsList>
        ))}
      </CategoryContentsWrap>
    </>
  )

}

export default PromotionClickCategory;