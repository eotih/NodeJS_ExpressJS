const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')


class MeController {
    // [GET] /me/stored/music
    storedMusic(req, res, next) {
        let musicQuery = Course.find({})


        // if (req.query.hasOwnProperty('_sort')) {
        //     musicQuery = musicQuery.sort({
        //         [req.query.column]: req.query.type
        //     });
        // }
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-music', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                })
            )
        // Hàm đếm số lượng trong thùng rác
        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount)

        //     })
        //     .catch(() => { })
        // Course.find({})
        //     .then((courses) => res.render('me/stored-music', {
        //         courses: mutipleMongooseToObject(courses)
        //     }))
        //     .catch(next)
    }
    // [GET] /me/trash/music
    trashMusic(req, res, next) {
        Course.findDeleted({})
            .then((courses) => res.render('me/trash-music', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

module.exports = new MeController();