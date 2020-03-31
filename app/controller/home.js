'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    // cookie设置
    ctx.cookies.set('name', 'cherry', {
      maxAge: 1000 * 3600 * 24, // cookie存储一天
      httpOnly: true, // 设置键值对是否可以被 js 访问，默认为 true，不允许被 js 访问。
      signed: true, // 是否对cookie进行签名， 为true， 防止用户修改cookie
      // encrypt: true, // 是否对cookie进行加密， 如果cookie加密，获取的时候需要解密
    });
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

    // 获取加密的cookie
    // const name_s = ctx.cookies.get('name', {
    //   encrypt: true,
    // });
    await ctx.render('news.html', {
      list,
      name,
    });
  }
}

module.exports = HomeController;
