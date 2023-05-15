import { DetailAsidebarwrap, DetailButton, DetailCircleWrap, DetailRegistAside, FlexCenter, FlexGap3px, UserNameDetail } from "./styles";
import mail from "@/assets/images/Mail.png";
import Profile from "@/assets/images/profileicon.png";
import Phone from "@/assets/images/Phone.png";
import location from "@/assets/images/LocationIcon.png";
import website from "@/assets/images/webSite.png";

const PromotionDetailAsideBarUI = () =>{

return(
  <>
  <DetailRegistAside>
      <DetailCircleWrap>
        <img src={Profile}></img>
      </DetailCircleWrap>
      <UserNameDetail>홍길동</UserNameDetail>
      <DetailAsidebarwrap>
        <FlexGap3px>
          <span>
            <img src={mail} />
          </span>
          <span>asd1234@naver.com</span>
        </FlexGap3px>
        <FlexGap3px>
          <span>
            <img src={Phone} />
          </span>
          <span>010-0000-0000</span>
        </FlexGap3px>
        <FlexGap3px>
          <span>
            <img src={location}></img>
          </span>
          <span>서울특별시</span>
        </FlexGap3px>
        <FlexGap3px>
          <span>
            <img src={website}></img>
          </span>
          <span>www.naver.com</span>
        </FlexGap3px>
      </DetailAsidebarwrap>
      <FlexCenter>
        <DetailButton>등록하기</DetailButton>
      </FlexCenter>
    </DetailRegistAside>
    </>
)

}

export default PromotionDetailAsideBarUI;