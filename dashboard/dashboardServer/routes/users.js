var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.query.user === 'jeff') {
        res.send({
            name: 'Jeff Zhou'
        });
    } else {
        res.send({
            name: 'Darth Vader'
        });
    }
});
module.exports = router;
