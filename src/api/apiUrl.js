/*Auth*/
export const POST_LOGIN = "/auth/login";
export const POST_SIGN_UP = "/auth/signup";
export const GET_REFRESHTOKEN = "/atuh/refreshtoken/{userId}";

/*Email*/
export const GET_CONFIRM_EMAIL = "/api/v1/email/confirm";
export const POST_FIND_EMAIL = "/api/v1/email/findId";
export const POST_SEND_EMAIL = "/api/v1/email/send";

/*Promotion*/
export const GET_ALL_PROMOTION_FORM = "/api/v1/prom";
export const GET_PROMOTION_FORM = "/api/v1/prom/{promotionId}";
export const POST_PROMOTION_FORM = "/api/v1/prom";
export const PUT_PROMOTION_FORM = "/api/v1/prom/{promotionId}";
export const DELETE_PROMOTION_FORM = "/api/v1/prom/{promotionId}";

/*Study*/
export const GET_ALL_STUDY_FORM = "/api/v1/study";
export const GET_STUDY_FORM = "/api/v1/prom/{promotionId}";
export const POST_STUDY_FORM = "/api/v1/study";
/*Study Comment*/
export const GET_STUDY_FORM_COMMENT = "/api/v1/study/comment";
export const POST_STUDY_FORM_COMMENT = "/api/v1/study/comment";
export const PUT_STUDY_FORM_COMMENT = "/api/v1/study/comment";
export const DELETE_STUDY_FORM_COMMENT = "/api/v1/study/comment";
/*Study DeadLine*/
export const POST_STUDY_FORM_DEADLINE = "/api/v1/study/{studyId}/dead";
/*Study Scrap*/
export const GET_STUDY_FORM_SCRAP = "/api/v1/study/scrap";
export const POST_STUDY_FORM_SCRAP = "/api/v1/study/scrap/{scrapId}";
export const DELETE_STUDY_FORM_SCRAP = "/api/v1/study/scrap/{scrapId}";
