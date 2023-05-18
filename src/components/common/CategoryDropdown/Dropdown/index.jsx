import { useState } from "react";


import { CategoryDropdownWrap, CategoryItem, CategoryList, SubcategoryItem, SubcategoryList } from "./style";
import CATEGORIES from "../../../categories";

const Dropdown = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setdata] = useState(CATEGORIES);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowSubcategories(true);
  };

  const handleSubcategoryClick = (event) => {
    event.stopPropagation();
  };

  return (
    <CategoryDropdownWrap>
      <CategoryList>
        {data.map((category) => (
          <CategoryItem
            key={category.id}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </CategoryItem>
        ))}
      </CategoryList>
      {showSubcategories && !!selectedCategory && (
        <SubcategoryList>
          {selectedCategory.subcategories.map((subcategory) => (
            <SubcategoryItem
              key={subcategory.subCategoryId}
              onClick={handleSubcategoryClick}
            >
              <input type="checkbox" />
              {subcategory.name}
            </SubcategoryItem>
          ))}
        </SubcategoryList>
      )}
    </CategoryDropdownWrap>
  );
};
export default Dropdown;

