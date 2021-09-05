const Circle = require('../models/index').Circle;
const sequelize = require('../models/index').sequelize;
module.exports = {
  async search(req, res) {
    try {
      const data = await Circle.findAll({
        // 别名 px -> x | py -> y
        attributes: [['px', 'x'], ['py', 'y']]
      });
      res.status(200).send({
        response: {
          successful: true,
          returnData: data
        }
      });
    } catch {
      res.status(500).send({
        response: {
          successful: false,
          returnData: []
        }
      });
    }
  },
  async query1(req, res) {
    try {
      const data = await Circle.findAll({
        attributes: {
          include: [
            'px', 'py', ['radius', 'r'],
            // 使用聚合函数时,必须为它提供一个别名,以便能够从模型中访问它.
            [sequelize.fn('COUNT', sequelize.col('px')), 'n_px'],
            [sequelize.fn('COUNT', sequelize.col('py')), 'n_py'],
          ],
          exclude: [
            'id','radius',
            'createdTime',
            'updatedTime',
          ]
        }
      });
      res.status(200).send({
        response: {
          successful: true,
          returnData: data
        }
      });
    } catch(error) {
      console.error(error.toString());
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
  },
  async delete(req, res) {
  },
  async create(req, res) {
    try {
      const data = await Circle.create({
        px: req.body.x,
        py: req.body.y,
        radius: req.body.r
      });
      res.status(200).send({
        response: {
          successful: true,
          returnData: data,
        },
      });
    } catch (error) {
      res.status(500).send({
        response: {
          successful: false,
          returnData: null,
          errorMesg: error
        },
      });
    }
  },
}