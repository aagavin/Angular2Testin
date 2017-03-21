const express = require('express');
const request = require('request');
const router = express.Router();
const imdb = require('imdb-api');

let favMovies = []

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

router.get('/fav', (req, res) => {
  let movieInfo = []
  favMovies.forEach(movieId => {
    imdb.getById(movieId).then(movie => {
      movieInfo.push({
        'title': movie.title,
        'rated': movie.rated,
        'released': movie.released,
        'actors': movie.actors,
        'plot': movie.plot,
        'poster': movie.poster,
        'metascore': movie.metascore,
        'imdburl': movie.imdburl
      })
    })

  })
})


router.post('/add/:id', (req, res) => {
  favMovies.push(req.params.id)
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
