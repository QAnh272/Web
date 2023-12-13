const express = require('express');
const router = express.Router();

const siteController = require ('../app/controllers/SiteController')

router.get('/search', siteController.search)
router.get('/', siteController.index)
router.get('/login', siteController.login)
router.get('/signup', siteController.signup)
router.post('/signup', siteController.signupPost)
router.post('/login', siteController.loginPost)

module.exports = router;