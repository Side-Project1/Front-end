import PromotionDetailAsideBarUI from "./PromotionDetailAsideBarUI"
import PromotionDetailKeyword from "./PromotionDetailKeyword"
import IntroduceText from "./PromotionDivUI"
import { PromotionInputWrapper } from "./PromotionDivUI/styles"
import { H2Title, PromotionDetailContentWrapper, PromotionDetailWholeWrap, TitleProfileWrap, WidthHundredPerWrap } from "./styles"



const PromotionDetailTextForm = ({plus,setPlus}) =>{


  return(
    <>
        <TitleProfileWrap>
        <H2Title>상세페이지</H2Title>
      </TitleProfileWrap>
      <PromotionDetailAsideBarUI />
      <WidthHundredPerWrap>
        <PromotionDetailWholeWrap>
          <PromotionDetailContentWrapper>
            <span>제목</span>
          </PromotionDetailContentWrapper>
          <IntroduceText />
          <PromotionInputWrapper>
            <span>키워드</span>
            <PromotionDetailKeyword plus={plus} />
          </PromotionInputWrapper>
        </PromotionDetailWholeWrap>
      </WidthHundredPerWrap>
    </>
  )


}

export default PromotionDetailTextForm
