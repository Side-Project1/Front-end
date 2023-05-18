import { CommunityLogoImg, CommunityTitieWrapper, CommunityTitle } from "./styles"
import boy1 from "@/assets/images/artnjobboy.png";


const CommunityTitleUI = () =>{

  return(
    <CommunityTitieWrapper>
    <CommunityLogoImg src={boy1}/>
    <CommunityTitle>Community</CommunityTitle>
      </CommunityTitieWrapper>
  )
}

export default CommunityTitleUI