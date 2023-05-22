import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/joy/Checkbox";
import Input from "@mui/joy/Input";
import {
  LineStudy,
  StudyContentsWrap,
  StudyFormFont,
  StudyFormRadio,
  StudyFormWrapper,
  StudyRegisterButton,
  StudyRegisterWrap,
  StudyTextForm,
  StudyTextFormWrap,
  StudyTitleTextWrap,
} from "./StudyFormStyle";

const StudyForm = () => {
  return (
    <div>
      <StudyFormWrapper>
        <StudyTextFormWrap>
          <StudyFormFont>스터디 글쓰기</StudyFormFont>
          <StudyContentsWrap>
            <div>카테고리</div>
            <Select defaultValue="Music" style={{ width: "538px" }}>
              <Option value="Music">음악</Option>
              <Option value="design">디자인</Option>
              <Option value="Art">미술</Option>
              <Option value="KPOP">실용음악</Option>
            </Select>
          </StudyContentsWrap>
          <StudyContentsWrap>
            <div>지역</div>
            <Select defaultValue="Seoul" style={{ width: "538px" }}>
              <Option value="Seoul">서울</Option>
              <Option value="Kyunggi">경기</Option>
              <Option value="Incheon">인천</Option>
              <Option value="busan">부산</Option>
              <Option value="Daegu">대구</Option>
              <Option value="Daejeon">대전</Option>
              <Option value="Gwangju">광주</Option>
              <Option value="Gangwon">강원</Option>
              <Option value="kyungbook">경북</Option>
              <Option value="Jeonbook">전북</Option>
              <Option value="chungbook">충북</Option>
              <Option value="sejong">세종</Option>
              <Option value="ulsan">울산</Option>
              <Option value="kyungnam">경남</Option>
              <Option value="Jeonnam">전남</Option>
              <Option value="chungNam">충남</Option>
              <Option value="Jeju">제주</Option>
              <Option value="overSea">해외</Option>
            </Select>
          </StudyContentsWrap>
          <StudyContentsWrap>
            <div>모집인원</div>
            <StudyFormRadio>
              <Input
                placeholder="명"
                variant="outlined"
                style={{ width: "538px" }}
              />
              <Checkbox label="제한없음" variant="outlined" defaultChecked />
            </StudyFormRadio>
          </StudyContentsWrap>
          <LineStudy></LineStudy>
          <StudyTitleTextWrap>
            <div>스터디 모집 제목</div>
            <Input variant="outlined" style={{ width: "538px" }} />
          </StudyTitleTextWrap>
          <div>
            <StudyTextForm
              placeholder="내용을 입력해 주세요. (시간, 장소 등등 필요한 정보 입력)"
              minRows={2}
            />
          </div>
          <StudyRegisterWrap>
            <StudyRegisterButton>등록</StudyRegisterButton>
            <StudyRegisterButton>미리보기</StudyRegisterButton>
          </StudyRegisterWrap>
        </StudyTextFormWrap>
      </StudyFormWrapper>
    </div>
  );
};

export default StudyForm;
