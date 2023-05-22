import { useMutation } from "react-query";
import axiosinstance from "../../config/AxiosInstance";
import { POST_SIGN_UP } from "./apiUrl";

const SignUp = (data) => {
  console.log(data);
  return axiosinstance.post(POST_SIGN_UP, data);
};

export const useSignUp = () => {
  return useMutation(SignUp, {
    onSuccess: (data) => {
      alert("회원가입이 완료되었습니다.");
    },
    onError: (err) => {
      alert("회원가입에 실패하였습니다.");
    },
  });
};
