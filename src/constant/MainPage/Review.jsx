import * as S from "./Review.style";
import ReviewCard from "../../components/ReviewCard";

const Review = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TopSection>
          <S.Title>전/현직자들의 생생한 피드백</S.Title>
          <S.SubTitle>옆으로 넘겨서 많은 리뷰들을 확인하세요!</S.SubTitle>
        </S.TopSection>
        <S.BottomSection>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </S.BottomSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default Review;
