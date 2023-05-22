import React, { useState } from "react";
import {
  BorderKeyword,
  InputWrapKeyword,
  KeyWordInputflex,
  ProfileTitle,
  PromotioTextForm,
  PromotionFormWrap,
  PromotionInput1,
  PromotionInput2,
  PromotionInput3,
  PromotionInput3Button,
  PromotionInputWrapper,
  PromotionProfileWrap,
  PromotionTextWrap,
} from "./promotionFormstyle";


import { PromotionRegisterButton, PromotionRegisterButtonWrap } from "./Promotionstyle";


const PromotionForm = () => {
  const [plus, setPlus] = useState([]);
  const [store, setStore] = useState([])
  const [write, setWrite] = useState("");
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");

  // const handleRegister = async () => {
  //   const requestData = {
  //     "contents": introduction,
  //     "sub_category": [1],
  //     "title": title,
  //   }
  //   //   await axios.post('http://13.209.81.190:8080/api/v1/prom', requestData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NDI0ODAyMS01MTA3LTQwYzAtOWJkZC0yZDNjMmQxYTNmMmUiLCJpYXQiOjE2ODQ0MDQwNDQsImV4cCI6MTY4NDQwNTg0NH0.Vfv3yn4lnjiCQm2J-XOh-mGkBbT83vkADIm4o4iWRsKXB_XvC7cceC_Cg-2Sd6R9kFp70VRXvBJMFQmsZWsc4g"
  //         }
  //       },
  //     )
  //       .then(response => {
  //         const postData = response.data
  //         setStore(postData)
  //         console.log('성공입니다')
  //       })
  //       .catch(error => {
  //         console.log(error)
  //         console.log('실패했습니다')
  //       })
  //     console.log(store)
  //   }


  return (
    <PromotionFormWrap>
      <PromotionProfileWrap>
        <ProfileTitle>홍보게시판</ProfileTitle>
      </PromotionProfileWrap>
      <PromotionTextWrap>
        <PromotioTextForm>
          <PromotionInputWrapper>
            <span>제목</span>
            <PromotionInput1
              placeholder="제목을 입력해주세요"
              // value={store.data.title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
                      <button
                        onClick={() => {
                          let copy = [...plus];
                          copy.splice(i, 1);
                          setPlus(copy);
                        }}
                      >
                        x
                      </button>
                    </>
                  );
                })}
              </div>
            </InputWrapKeyword>
          </PromotionInputWrapper>
          <PromotionInputWrapper>
            <span>자기소개</span>
            <PromotionInput2
              id="filled-textarea"
              label="한줄 소개"
              placeholder="자신을 어필 할 수 있는 소개를 해주세요!"
              multiline="true"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </PromotionInputWrapper>
          <PromotionRegisterButtonWrap>
            <PromotionRegisterButton>등록</PromotionRegisterButton>
            <PromotionRegisterButton>취소</PromotionRegisterButton>
          </PromotionRegisterButtonWrap>
        </PromotioTextForm>
      </PromotionTextWrap>
    </PromotionFormWrap>
  );
};
export default PromotionForm;
