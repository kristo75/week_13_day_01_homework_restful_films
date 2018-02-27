//since we don't have a database we'll use our front end models at the moment
const express = require('express');
const filmRouter = new express.Router();

const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');


//index
filmRouter.get('/', function(req, res){
  res.json({data: films});
});

// show
filmRouter.get('/:id', function (req, res){
  res.json({data: films[req.params.id]});
});


//create
filmRouter.post('/', function(req, res) {
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films.push(film);
  res.json({data: films});
});

//update
filmRouter.put('/:id', function(req, res){
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors
  })
  films[req.params.id] = film;
  res.json({data: films});

});

// delete
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

//create review
filmRouter.post('/:id/reviews', function(req, res) {
  const film = films[req.params.id];
  const review1 = new Review({
    comment: req.body.comment,
    rating: req.body.rating,
    author: req.body.author
  });
  film.addReview(review1);
  res.json({data: films});
});


module.exports = filmRouter;
