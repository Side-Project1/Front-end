import { DetailKeyword, FlexGap5Column } from "./styles";


const PromotionDetailKeyword = ({plus}) =>{

return(
  <>
  <FlexGap5Column>
  <div>
    {plus.map((e, i) => {
      return (
        <>
          <DetailKeyword>
            <span>{plus[i]}</span>
          </DetailKeyword>
        </>
      );
    })}
  </div>
</FlexGap5Column>
</>
)

}

export default PromotionDetailKeyword;