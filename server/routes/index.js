const express = require('express');
const router = express.Router();

// const classroom = require('../controllers/classroom');
// const course = require('../controllers/course');
const student = require('../controllers/student');
// const teacher = require('../controllers/teacher');
// const score = require('../controllers/score');
// const circle = require('../controllers/circle');

// router.put('/classroom', classroom.create);
// router.delete('/classroom', classroom.delete);
// router.post('/classroom', classroom.update);
// router.get('/classroom', classroom.search);

// router.put('/course', course.create);
// router.delete('/course', course.delete);
// router.post('/course', course.update);
// router.get('/course', course.search);

// router.put('/score', score.create);
// router.delete('/score', score.delete);
// router.post('/score', score.update);
// router.get('/score', score.search);

router.put('/student', student.create);
router.delete('/student', student.delete);
router.post('/student', student.update);
router.get('/student', student.search);

// router.put('/teacher', teacher.create);
// router.delete('/teacher', teacher.delete);
// router.post('/teacher', teacher.update);
// router.get('/teacher', teacher.search);

// router.put('/api/circle', circle.create);
// router.delete('/api/circle', circle.delete);
// router.post('/api/circle', circle.update);
// router.get('/api/circle', circle.query1);

module.exports = router;