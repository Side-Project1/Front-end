import { useMutation } from "react-query";
import axiosinstance from "../../config/AxiosInstance";
import { POST_SEND_EMAIL } from "./apiUrl";

const SendEmail = (data) => {
  console.log(data);
  return axiosinstance.post(POST_SEND_EMAIL, data);
};

export const useSendEmail = () => {
  return useMutation(SendEmail, {
    onSuccess: (data) => {
      alert("이메일이 전송에 성공하였습니다.");
    },
    onError: (err) => {
      alert("이메일 전송에 실패하였습니다.");
    },
  });
};
