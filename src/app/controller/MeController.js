const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')


class MeController {
    // [GET] /me/stored/music
    storedMusic(req, res, next) {
        Course.find({})
            .then((courses) => res.render('me/stored-music', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
    // [GET] /me/trash/music
    trashMusic(req,res, next) {
        Course.findDeleted({})
        .then((courses) => res.render('me/trash-music', {
            courses: mutipleMongooseToObject(courses)
        }))
        .catch(next)
    }
}

module.exports = new MeController();