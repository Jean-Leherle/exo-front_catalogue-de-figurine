const path = require('path');
const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil

  homePage: async (req, res) => {

    try {

      const figurines = await dataMapper.getAllFigurines();
      const reviews = await dataMapper.getNoteReviews();
      
      res.render('accueil.ejs', { figurines, reviews });
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
      const reviews = await dataMapper.getReviewsbyId(articleId)

      if (!figurine) {
        next();
      } else {

    res.render('article.ejs', { figurine, reviews });
      }

    } catch (error) {
      res.status(500).send("erreur 500");
    }

  },

};

/* function testWithSession(req) {
  console.log(req.session);

  if (req.session.count === undefined) { // Si la session vient tout juste d'être initialisé, je n'ai pas encore accès à req.session.count
    req.session.count = 0; // Donc je l'initialise
  } else {
    req.session.count += 1; // Sinon je l'incrémente
  }

  console.log("Vous êtes à votre visite numéro", req.session.count);
} */

module.exports = mainController;
