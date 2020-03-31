"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/renderEjs", controller.home.renderEjs);
  router.get("/renderList", controller.home.renderList);
  router.get("/news", controller.news.index);
  router.get("/newslist/:id", controller.news.newsList);
};
