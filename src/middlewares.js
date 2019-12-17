import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "save-idiot";
    res.locals.routes = routes;
    next();
}