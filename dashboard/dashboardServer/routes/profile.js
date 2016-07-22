var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        profiles: [{
            username: 'Jeff',
            fullname: "Jeff Zhou",
            nickname: 'The Omnipotent',
            profileImage: 'assets/images/src/profile/jeff.png'
        }, {
            username: 'darth',
            fullname: "Darth Vader",
            nickname: 'The Dark Side',
            profileImage: 'assets/images/src/profile/darth.png'
        }]
    });
});
module.exports = router;
