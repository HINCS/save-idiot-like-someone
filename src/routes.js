// Global Routes
const INTRO = "/";
const HOME = "/home";
const LOGOUT = "/logout";
const SEARCH = "/search";
const LOGIN = "/login";

// User Routes
const USER = "/users";
const MENTORING_STATUS = "/mentoring-status";
const EDIT_PROFILE = "/edit-profile";

//Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//Google
const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK = "/auth/google/callback";

//Kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";


// Writing Routes
const WRITING = "/writings";
const UPLOAD = "/upload";
const WRITING_DETAIL = "/:id";
const EDIT_WRITING = "/:id/edit";
const DELETE_WRITING = "/:id/delete";

const routes = {
  intro: INTRO,
  home: HOME,
  logout: LOGOUT,
  search: SEARCH,
  login: LOGIN,
  user: USER,
  mentoringStatus: MENTORING_STATUS,
  editProfile: EDIT_PROFILE,
  writing: WRITING,
  upload: UPLOAD,
  writingDetail: WRITING_DETAIL,
  editWriting: EDIT_WRITING,
  deleteWriting: DELETE_WRITING,
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK
};

export default routes;
