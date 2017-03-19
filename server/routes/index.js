let express = require('express');
let requests = require('requests');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.status(200).json({
    'success': true
  })
});

router.get('/search')

module.exports = router;
