"use strict";

const Service = require("egg").Service;

class NewsService extends Service {
  async getNewsList() {
    const list = [1, 2, 3];
    return list;
  }
}

module.exports = NewsService;
