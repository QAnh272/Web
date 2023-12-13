
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");



function route(app) {
  app.use('/me', meRouter);
  app.use('/', siteRouter);
  app.use('/courses', coursesRouter);

}
module.exports = route;
