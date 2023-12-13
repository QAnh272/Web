const Course = require("../models/Course");
const Account = require("../models/Account");
const {multipleMongooseToObject} = require("../../util/mongoose")

class SiteController {
    //[GET] / news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render("home", {courses: multipleMongooseToObject(courses)});
            })
            .catch(next);
    }
    //[GET] /search
    search(req, res) {
        res.render("search");
    }
    //login
    login(req, res) {
        res.render("login");
    }
    //signup
    signup(req, res) {
        res.render("signup");
    }
    //[post] /register
    async signupPost(req, res, next) {
        await Account.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(()=>res.render("login"))
            .catch(error => {
                console.error('Error inserting data into MongoDB:', error);
                next(error);
            });
    }
    //[post] /login
    async loginPost(req, res) {
        try {
            const check = await Account.findOne({email: req.body.email})
            if (check.password === req.body.password) {
                res.redirect("/")
            } else {
                res.send("Wrong Password!")
            }
        } catch {
            res.send("Wrong details!")
        }
    }
}

module.exports = new SiteController();
