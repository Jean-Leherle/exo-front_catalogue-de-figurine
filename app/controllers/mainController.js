const path = require('path');

const mainController = {

  // méthode pour la page d'accueil

  homePage: (req, res) => {
    
    res.render('accueil.ejs');
},

articlePage: (req, res) => {
    
  res.render('article.ejs');
},
};


module.exports = mainController;
