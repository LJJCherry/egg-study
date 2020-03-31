'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.session.name = 'user';
    ctx.body = '设置session';
  }
  async getSession() {
    const { ctx } = this;
    console.log(ctx.session.name);
    ctx.body = ctx.session.name;
  }
}

module.exports = AdminController;
