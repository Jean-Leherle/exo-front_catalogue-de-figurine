//const path = require('path');
const dataMapper = require('../dataMapper');

const bookmarksController = {
  bookmarksPage: (req, res) => {
    const bookmarks = req.session.bookmarks;
    console.log(bookmarks);
    res.render('favoris.ejs', {bookmarks});
  },
  bookmarksAddFigurine: async (req, res) => {
    if (!req.session.bookmarks) {
      req.session.bookmarks = [];
    }
    const articleId = req.params.id;
    try{
    const figurine = await dataMapper.getOneFigurine(articleId);
    if(!req.session.bookmarks.find((bookmark) => bookmark.id === figurine.id)){
      req.session.bookmarks.push(figurine);
    }


    res.redirect('/bookmarks');
    }
    catch(error){
      console.log(error);
    }    
  }
};

module.exports = bookmarksController;
