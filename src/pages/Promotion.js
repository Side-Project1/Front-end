import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CategoryContents, CategoryContentsElement, CategoryWrapper, RegisterButton, RegisterWrap, RegisterWrapper, RegiststerDiv, SearchingBar, SearchingBarWrap, SemiCategory, SemiCategoryWrapper, SemiWrapper } from '../styles/jobstyle';
import TriangleIcon from '../styles/TriangleIcon';
import Dropdown from '../components/Dropdown ';

const Promotion= ()=> {
  const navigate = useNavigate();
  const [views, setViews] = useState(
    {
    view1: false,
    view2: false,
    view3: false
  });

  const toggleView = (view) => {
    setViews({ ...views, [view]: !views[view] });
  };

  const categoryContents = ['전체', '음악', '디자인 미술', '체육 무용', '기타'];
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <CategoryWrapper>
      <CategoryContents>
        {categoryContents.map((category) => (
          <CategoryContentsElement key={category} 
          onClick={() => onCategoryClick(category)} 
          style={{background: category === selectedCategory ? 'linear-gradient(90deg, #FFC642 0%, rgba(255, 238, 199, 0.0260417) 251.08%)' : 'transparent'}}>{category}</CategoryContentsElement>
        ))}
      </CategoryContents>
      <SemiWrapper>
      <SemiCategoryWrapper>
          <SemiCategory onClick={() => toggleView('view1')}>
            카테고리 <TriangleIcon />
            {views.view1 && <Dropdown />}
          </SemiCategory>
          <SemiCategory onClick={() => toggleView('view2')}>
            경력 <TriangleIcon />
            {views.view2 && <Dropdown />}
          </SemiCategory>
          <SemiCategory onClick={() => toggleView('view3')}>
            지역 <TriangleIcon />
            {views.view3 && <Dropdown />}
          </SemiCategory>
        </SemiCategoryWrapper>
        <SearchingBarWrap>
          <SearchingBar placeholder='제목 + 본문검색' />
        </SearchingBarWrap>
      </SemiWrapper>
      <RegisterWrap>
        <div>전체 100건</div>
        <RegisterWrapper>
          < RegiststerDiv>최근 등록순</RegiststerDiv>
          <RegisterButton onClick={()=>{navigate('/promotionform')}}>
            글쓰기
          </RegisterButton >
        </RegisterWrapper>
      </RegisterWrap>
    </CategoryWrapper>
    )
}

export default Promotion