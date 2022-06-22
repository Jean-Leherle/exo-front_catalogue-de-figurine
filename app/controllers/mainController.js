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

  articlePage: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const figurine = await dataMapper.getOneFigurine(articleId);

      if (!figurine) {
        next();
      } else {

    res.render('article.ejs', { figurine });
      }

    } catch (error) {
      res.status(500).send("erreur 500");
    }

  },
};

module.exports = mainController;
