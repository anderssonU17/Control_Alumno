'use strict'

const {Router} = require('express');
const { createCurse, cursoProfesor, readCourses, assignStudent } = require('../controller/curses.controller');

const api = Router();

api.post('/create-curse', createCurse);
api.post('/asign-teacher/:name/teacher/:username', cursoProfesor);
api.get('/read-course', readCourses);
api.post('/asign-students', assignStudent)

module.exports = api;

