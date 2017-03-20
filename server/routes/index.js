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
  if (req.query.q !== '') {
    let query = (req.query.q).split(' ').join('_')
    
    request.get(`https://v2.sg.media-imdb.com/suggests/${query[0]}/${encodeURIComponent(query)}.json`, (error, response, body) => {
      let jsonResponse = body.replace(`imdb$${query}(`, '')
      jsonResponse = jsonResponse.substring(0, jsonResponse.length-1);
      res.status(200).json(JSON.parse(jsonResponse)['d'])
    })
  }
  else{
    res.sendStatus(200).json({'error': true})
  }

})

module.exports = router;
