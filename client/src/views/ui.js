const Films = require('../models/films');

const UI = function () {
  const films = new Films();
  this.render(films);
}

UI.prototype.createText = function (text, label) {
  const p = document.createElement("p");
  p.innerText = label + text;
  return p;
}

UI.prototype.appendText = function (element, text, label) {
  const pTag = this.createText(text, label);
  element.appendChild(pTag);
}

UI.prototype.createReview = function (container, review) {
  this.appendText(container, review.comment, "Comment: ");
  this.appendText(container, review.rating, "Rating: ");
}

UI.prototype.render = function (films) {
  const container = document.getElementById("films");

  for (const film of films) {
    const li = document.createElement("li");
    this.appendText(li, film.title, "Film: ");

    for (const review of film.reviews) {
      this.createReview(li, review);
    }
    container.appendChild(li);
  }
}

module.exports = UI;
