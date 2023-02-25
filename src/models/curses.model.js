'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursesSchema = Schema({
    name: String,
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
    },
    students: [{
        type: Schema.Types.ObjectId, 
        ref: 'Usuarios'}]
});

module.exports = mongoose.model('Courses', CursesSchema);