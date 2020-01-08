import routes from "./routes";

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "save-idiot";
  // / it should return 'true' if user is logged in.
  res.locals.loggedIn = false;
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  next();
};

export default localsMiddleware;
