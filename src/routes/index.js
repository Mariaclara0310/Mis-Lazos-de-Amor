const router = require('express').Router();
const indexController = require('../../controllers/indexController');
/* GET home page. */
router.get('/',indexController );

module.exports = router;
