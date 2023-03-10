var express = require('express');
var router = express.Router();
const login = require('../components/login');
const home = require('../components/home');
const register = require('../components/register');
const liste = require('../components/liste');
const ich = require('../components/ich');

/* GET home page. */
router.get('/', function(req, res, next){
    if(!req.session.loggedin) {
        res.redirect('/login');
    }else{
        res.redirect('/home');
    }
});
router.get('/home', home.view);
router.get('/login', login.view);
router.post('/logout', login.end);
router.get('/register', register.view);

/*GET worker pages*/
router.get('/returns')

module.exports = router;
