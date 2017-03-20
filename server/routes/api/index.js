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
      jsonResponse = jsonResponse.substring(0, jsonResponse.length - 1);
      
      res.status(200).json(parseResponse(jsonResponse))
    })
  }
  else {
    res.sendStatus(200).json({ 'error': true })
  }

})


let parseResponse = (jsonResponse) => {
  let validMovies = []
  j = JSON.parse(jsonResponse)
  j['d'].forEach((value) => {
    if (typeof value['q'] !== 'undefined') {
      validMovies.push(value)
    }
  })
  return validMovies
}

module.exports = router;
