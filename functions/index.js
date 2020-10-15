const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const url = 'https://www.reddit.com/search.json';
//App config
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//API routes
app.get('/search', async (req, res) => {
  const query = req.query.q;
  axios
    .get(url, {
      params: { q: query },
    })
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
