const Application = require('../models/index').Application;
module.exports = {
  async search(req, res) {
    res.status(200).send('查询成功');
  },
  async update(req, res) {
    res.status(200).send('更新成功');
  },
  async delete(req, res) {
    res.status(200).send('删除成功');
  },
  async create(req, res) {
    res.status(200).send('创建成功');
  },
  async getById(req, res) {
    res.status(200).send('查询成功');
  },
}