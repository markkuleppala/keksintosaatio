const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const matchInventor = require("./match_scoring.js");

const app = express();

/** Automatically allow cross-origin requests */
app.use(cors({origin: true}));

/** build multiple CRUD interfaces: */
app.post("/", async (req, res) => {
  const matches = await matchInventor(req.body);
  console.log(matches);
  res.send(matches);
});

// Expose Express API as a single Cloud Function:
exports.matches = functions.https.onRequest(app);
