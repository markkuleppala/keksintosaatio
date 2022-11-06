const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const matchInventor = require("./match_scoring.js");

const app = express();

/** Automatically allow cross-origin requests */
app.use(cors({origin: true}));

/** build multiple CRUD interfaces: */
app.post("/", (req, res) => {
  const matches = matchInventor(req.body);
  // res.send({"mock": "match"});
  res.send(matches);
});

// Expose Express API as a single Cloud Function:
exports.matches = functions.https.onRequest(app);
