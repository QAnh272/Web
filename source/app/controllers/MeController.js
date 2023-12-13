const Course = require("../models/Course");
const {multipleMongooseToObject} = require("../../util/mongoose")

class MeController {
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsWithDeleted({deleted: true})])
            .then(([courses, deletedCount]) =>
                res.render('me/storedCourses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                }))
            .catch(next);
    }

    trashCourse(req, res, next) {
        Course.findWithDeleted({deleted: true})
            .then(courses => res.render('me/trashCourse', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
