var express = require('express');
var router = express.Router();
var subController = require('../controllers/subController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendStatus(401);
});

router.post('/list', subController.getSub);
router.put('/list', subController.addSub);
router.delete('/list', subController.delSub);



module.exports = router;
