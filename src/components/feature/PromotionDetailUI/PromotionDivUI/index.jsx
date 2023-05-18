import { PromotionInputWrapper, PromotionIntroduceText, TitleProfileWrap } from "./styles"

const IntroduceText = ({contents}) =>{

return(
  <PromotionInputWrapper>
  <span>자기소개</span>
  <PromotionIntroduceText>
    {contents}
  </PromotionIntroduceText>
</PromotionInputWrapper>
)
  
}

export default IntroduceText;