'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    // 获取get传值
    const query = ctx.query;
    console.log('query', query);
    ctx.body = '新闻';
  }
  async newsList() {
    const { ctx } = this;
    // 获取动态路由传值
    const params = ctx.params;
    console.log('params', params);
    ctx.body = '新闻列表';
  }
}

module.exports = NewsController;
