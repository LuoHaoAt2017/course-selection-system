const Course = require('../models/index').Course;

module.exports = {
  async search(req, res) {
    try {
      const data = await Course.findAll({
      });
      res.status(200).send({
        response: {
          successful: true,
          returnData: data
        }
      });
    } catch(error) {
      res.status(500).send({
        response: {
          successful: false,
          returnData: [],
          errorMesg: error
        }
      });
    }
  },
  async update(req, res) {
    try {
      const course = await Course.findByPk(req.param.id);
      if (!course) {
        return res.status(500).send({
          response: {
            successful: false,
            returnData: [],
            errorMesg: '修改的数据项不存在'
          }
        });
      }
      const data = await course.update({
        cname: req.body.courseName
      });
      res.status(200).send({
        response: {
          successful: true,
          returnData: data,
        }
      });
    } catch(error) {
      res.status(500).send({
        response: {
          successful: false,
          returnData: [],
          errorMesg: error
        }
      });
    }
  },
  async delete(req, res) {
    res.status(200).send('删除成功');
  },
  async create(req, res) {
    if (!req.body.courseName) {
      res.status(500).send({
        response: {
          successful: false,
          returnData: [],
          errorMesg: 'courseName 为空'
        }
      });
    }
    try {
      await Course.create({
        cname: req.body.courseName
      });
      res.status(200).send({
        response: {
          successful: true,
          returnData: []
        }
      });
    } catch(error) {
      res.status(500).send({
        response: {
          successful: false,
          returnData: [],
          errorMesg: error
        }
      });
    }
  },
  async getById(req, res) {
    res.status(200).send('查询成功');
  },
}