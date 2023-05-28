import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./promotionFormstyle";
import { API_URL } from "../../config/constant";
import { POST_PROMOTION_FORM } from "../../api/apiUrl";

const PromotionForm = () => {
  const [plus, setPlus] = useState([]);
  const [write, setWrite] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [sub_category, setSubCategory] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기서 로컬 스토리지에 저장되어 있는 토큰을 가져오는데....
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `${API_URL}${POST_PROMOTION_FORM}`,
        {
          title,
          contents,
          sub_category,
        },
        // headers에도 보내고 있음
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("게시글이 등록되었습니다.");
      console.log(response.data);
      setTitle("");
      setContents("");
      setSubCategory([]);
      navigate("/Promotion");
    } catch (error) {
      console.log("게시글 등록 실패");
      console.error(error.response.data.data);
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.PromotionFormWrap>
        <S.PromotionProfileWrap>
          <S.ProfileTitle>홍보게시판</S.ProfileTitle>
        </S.PromotionProfileWrap>
        <S.PromotionTextWrap>
          <S.PromotioTextForm>
            <S.PromotionInputWrapper>
              <span>제목</span>
              <S.PromotionInput1
                placeholder="제목을 입력해주세요"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.PromotionInputWrapper>
            <S.PromotionInputWrapper>
              <span>키워드</span>
              <S.InputWrapKeyword>
                <S.KeyWordInputflex>
                  <S.PromotionInput3
                    id="sub_category"
                    value={write}
                    onChange={(e) => {
                      setWrite(e.target.value);
                    }}
                    placeholder="키워드를 입력해주세요"
                  />
                  <S.PromotionInput3Button
                    variant="outlined"
                    onClick={() => {
                      if (write.trim() !== "") {
                        setPlus((prevPlus) => [...prevPlus, write.trim()]);
                        setWrite("");
                      }
                    }}
                  >
                    추가
                  </S.PromotionInput3Button>
                </S.KeyWordInputflex>
                <div>
                  {plus.map((e, i) => {
                    return (
                      <>
                        <S.BorderKeyword key={i}>
                          <span>{plus[i]}</span>
                        </S.BorderKeyword>
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
              </S.InputWrapKeyword>
            </S.PromotionInputWrapper>
            <S.PromotionInputWrapper>
              <span>자기소개</span>
              <S.PromotionInput2
                label="한줄 소개"
                placeholder="자신을 어필 할 수 있는 소개를 해주세요!"
                multiline="true"
                id="contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              />
            </S.PromotionInputWrapper>
            <S.PromotionRegisterButtonWrap>
              <S.PromotionRegisterButton type="submit">
                등록
              </S.PromotionRegisterButton>
              <S.PromotionRegisterButton>취소</S.PromotionRegisterButton>
            </S.PromotionRegisterButtonWrap>
          </S.PromotioTextForm>
        </S.PromotionTextWrap>
      </S.PromotionFormWrap>
    </form>
  );
};
export default PromotionForm;
