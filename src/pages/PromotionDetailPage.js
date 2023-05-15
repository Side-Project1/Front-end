import React, { useState } from "react";
import {
  BorderKeyword,
  InputWrapKeyword,
  KeyWordInputflex,
  PromotioTextForm,
  PromotionInput1,
  PromotionInput2,
  PromotionInput3,
  PromotionInput3Button,
  PromotionInputWrapper,
  PromotionTextWrap,
} from "../styles/promotionFormstyle";
import { DetailFormWrap, H2Title, TitleProfileWrap } from "../styles/promotionDetailstyle";
import { useParams } from "react-router-dom";
import PromotionDetailAsidePresenter from "../components/feature/PromotionDetailUI";
import IntroduceText from "../components/feature/PromotionDetailUI/PromotionDivUI";


const PromotionDetailPage = () => {

  const { id } = useParams();


  const [plus, setPlus] = useState([]);
  const [write, setWrite] = useState("");
  return (
    <DetailFormWrap>
      <TitleProfileWrap>
        <H2Title>상세페이지</H2Title>
      </TitleProfileWrap>
      <PromotionDetailAsidePresenter />
      <PromotionTextWrap>
        <PromotioTextForm>
          <PromotionInputWrapper>
            <span>제목</span>
            <PromotionInput1 placeholder="제목을 입력해주세요" />
          </PromotionInputWrapper>
          <PromotionInputWrapper>
            <span>키워드</span>
            <InputWrapKeyword>
              <KeyWordInputflex>
                <PromotionInput3
                  onChange={(e) => {
                    setWrite(e.target.value);
                  }}
                  placeholder="키워드를 입력해주세요"
                />
                <PromotionInput3Button
                  variant="outlined"
                  onClick={() => {
                    if (write.trim() !== "") {
                      const copy = [...plus];
                      copy.push(write.trim());
                      setPlus(copy);
                    }
                  }}
                >
                  추가
                </PromotionInput3Button>
              </KeyWordInputflex>
              <div>
                {plus.map((e, i) => {
                  return (
                    <>
                      <BorderKeyword>
                        <span>{plus[i]}</span>
                      </BorderKeyword>
                    </>
                  );
                })}
              </div>
            </InputWrapKeyword>
          </PromotionInputWrapper>
          <IntroduceText />
        </PromotioTextForm>
      </PromotionTextWrap>
    </DetailFormWrap>
  );
};

export default PromotionDetailPage;
