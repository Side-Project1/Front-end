/*Auth*/
export const POST_LOGIN = "/auth/login";
export const POST_SIGN_UP = "/auth/signup";
export const GET_REFRESHTOKEN = "/atuh/refreshtoken/{userId}";

/*Email*/
export const GET_CONFIRM_EMAIL = "/api/v1/email/confirm";
export const POST_FIND_EMAIL = "/api/v1/email/findId";
export const POST_SEND_EMAIL = "/api/v1/email/send";

/*Promotion*/
export const GET_PROMOTION_FORM = "/api/v1/prom/1";
export const GET_ALL_PROMOTION_FORM = "/api/v1/prom?page=0&size=0";
export const POST_PROMOTION_FORM = "/api/v1/prom";
export const PUT_PROMOTION_FORM = "/api/v1/prom/1";
export const DELETE_PROMOTION_FORM = "/api/v1/prom/1";
