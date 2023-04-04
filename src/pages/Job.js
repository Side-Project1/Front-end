import React from 'react'
import { useState } from 'react';
import CategoryDropDown from '../components/CategoryDropDown';
import { Nav2 } from '../styles/JobStyle'
import { CatalogName, JobheaderWrap, CategoryDrop } from '../styles/JobStyle'

function Job() {
  const [view, setView] = useState(false); 

  return (
    <>
      <Nav2>
      <JobheaderWrap>
      <CatalogName>전체</CatalogName>
      <CatalogName>미술</CatalogName>
      <CatalogName>디자인</CatalogName>
      <CatalogName>체육무용</CatalogName>
      <CatalogName>기타</CatalogName>
    </JobheaderWrap>
    </Nav2>
    
    <CategoryDrop onClick={() => {setView(!view)}}> 
	    카테고리
	  {view ? '⌄' : '⌃'} 
	  {view && <CategoryDropDown />} 
    </CategoryDrop>
    </>

  )
}

export default Job