const Student = require('../models/index').Student;
const sequelize = require('../models/index').sequelize;

module.exports = {
  async search(req, res) {
    res.status(200).send([]);
  },
  async update(req, res) {
    res.status(200).send('更新成功');
  },
  async delete(req, res) {
    res.status(200).send('删除成功');
  },
  async create(req, res) {
    console.log('body: ', req.body);
    // Student.create();
    res.status(200).send('创建成功');
  },
  async getById(req, res) {
    res.status(200).send('查询成功');
  },
}