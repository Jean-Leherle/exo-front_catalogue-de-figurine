const path = require('path');
const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil

  homePage: async (req, res) => {

    try {
      const figurines = await dataMapper.getAllFigurines();
      
      res.render('accueil.ejs', { figurines });
    }
    catch (error) {
      res.status(500).send("erreur 500");
      console.log(error)
    }
  },

  articlePage: (req, res) => {

    res.render('article.ejs');
  },
};

module.exports = mainController;
