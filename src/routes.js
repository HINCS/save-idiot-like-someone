// Global Routes
const INTRO = "/";
const HOME = "/home";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User Routes
const USER = "/users";
const MENTORING_STATUS = "/mentoring-status";
const EDIT_PROFILE = "/edit-profile";

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
  user: USER,
  mentoringStatus: MENTORING_STATUS,
  editProfile: EDIT_PROFILE,
  writing: WRITING,
  upload: UPLOAD,
  writingDetail: WRITING_DETAIL,
  editWriting: EDIT_WRITING,
  deleteWriting: DELETE_WRITING
};

export default routes;
