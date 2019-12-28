import routes from "./routes";

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "save-idiot";
  res.locals.routes = routes;
  next();
};

export default localsMiddleware;
