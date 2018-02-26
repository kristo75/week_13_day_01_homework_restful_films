const UI = require('./views/ui');

const app = function(){
  new UI();
}

window.addEventListener('load', app);
