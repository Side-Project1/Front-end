import React, { useState } from 'react'
import { StudyDetailCommentWrap, StudyDetailCommentWriteWrap, StudyDetailContentsUIWrap, StudyDetailPageWrap, StudyDetailTextContentsWrapIcon, StudyDetailWrapper } from '../styles/StudyDetailPageStyle'
import { StudyRecruit, StudyRecruitTextContentsWrapIcon } from '../styles/StudyStyle'

const StudyDetailPage = () => {
  const [recruitType,setRecruitType] = useState(true);


  return (
    <StudyDetailPageWrap>
      <StudyDetailWrapper>
      <StudyDetailContentsUIWrap>
      <StudyRecruit>
          {
            recruitType === true? <span>모집중</span> : <span>모집완료</span>
          }
      </StudyRecruit>
      <StudyDetailTextContentsWrapIcon>음악</StudyDetailTextContentsWrapIcon>
      </StudyDetailContentsUIWrap>
      <StudyDetailCommentWrap>2</StudyDetailCommentWrap>
      <StudyDetailCommentWriteWrap>3</StudyDetailCommentWriteWrap>
      </StudyDetailWrapper>
    </StudyDetailPageWrap>
  )
}

export default StudyDetailPage