//since we don't have a database we'll use our front end models at the moment
const express = require('express');
const filmRouter = new express.Router();

const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');



filmRouter.get('/', function(req, res){
  res.json({data: films});
})

filmRouter.get('/:id', function (req, res){
  res.json({data: films[req.params.id]});
})

filmRouter.post('/', function(req, res) {
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films.push(film);
  res.json({data: films});
});

filmRouter.put('/:id', function(req, res){
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors
  })
  films[req.params.id] = film;
  res.json({data: films});

})

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
})


module.exports = filmRouter;
