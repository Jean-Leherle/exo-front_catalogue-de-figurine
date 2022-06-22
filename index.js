// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();
const session = require('express-session');

const express = require('express');

// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();
//parametrage de la session
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "fhsdjfghaqeryuifghuirdqhguirehguiserhifgsdhjih",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

app.set("view engine", "ejs");
app.set("views", "app/views");
app.use(express.static("app/public"));

// servir les fichiers statiques qui sont dans "integration"


// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
