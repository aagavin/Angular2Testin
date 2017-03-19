let express = require('express');
let request = require('request');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    'success': true
  })
});

router.get('/search', (req, res) => {
  let query = req.query.q;
  console.log('QUERY: ' + query)
  request.get(`https://v2.sg.media-imdb.com/suggests/${query[0]}/${query}.json`, (error, response, body)=>{
    let jsonResponse = body.replace('imdb$logan(', '')
    jsonResponse = jsonResponse.slice(0, -1);
    console.log(JSON.parse(jsonResponse))
    res.status(200).json(JSON.parse(jsonResponse)['d'])
  })
  
})

module.exports = router;
