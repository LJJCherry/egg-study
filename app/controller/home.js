'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    ctx.cookies.set('name', 'cherry');
  }
  async renderEjs() {
    const { ctx } = this;
    await ctx.render('index.html', {
      data: 'world',
    });
  }
  async renderList() {
    const { ctx } = this;
    const list = await this.service.news.getNewsList();
    console.log('list', list);
    const name = ctx.cookies.get('name');
    await ctx.render('news.html', {
      list,
      name,
    });
  }
}

module.exports = HomeController;
