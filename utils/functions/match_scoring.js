const axios = require("axios");
const _ = require("lodash");

// const inventorTest = {
//   "firstName": "Alex",
//   "lastName": "Smith",
//   "maturity": "Commercializing",
//   "industry": "Education",
//   "expertise": "Patenting",
// };

/** Fetch experts from API */
async function getExperts() {
  try {
    return await axios.get("https://mockend.com/markkuleppala/keksintosaatio-mockend/experts");
  } catch (err) {
    console.log(err.message);
    Promise.reject(err);
  }
}

// Weights maturity(0/15%),industry (0/30%),expertise(0/40%),experience (0-15%)
const W_MATURITY = 0.15;
const W_INDUSTRY = 0.30;
const W_EXPERTISE = 0.40;
const W_EXPERIENCE = 0.15;
const EXPERIENCE_MAX = 25;
const EXPERTS_TO_RETURN = 5;

/** Calculate matches */
function scoring(inventor, experts) {
  const scores = [];

  for (const expert of experts.data) {
    // console.log(expert);
    let score = 0.0;
    if (expert["maturity"].includes(inventor["maturity"])) {
      score += W_MATURITY;
    }
    if (expert["industry"].includes(inventor["industry"])) {
      score += W_INDUSTRY;
    }
    if (expert["expertise"].includes(inventor["expertise"])) {
      score += W_EXPERTISE;
    }
    score += expert["experience"] / EXPERIENCE_MAX * W_EXPERIENCE;
    scores.push(score);
  }

  const expertScores = _.sortBy(_.zip(experts.data, scores), [function(o) {
    return o[1];
  }]);

  return expertScores.slice(-EXPERTS_TO_RETURN);
}

/** TTT */
module.exports = async function matchInventor(inventor) {
  console.log(inventor);
  try {
    const experts = await getExperts();
    return scoring(inventor, experts);
  } catch (err) {
    console.log(err);
  }
  // getExperts().then((experts) => {
  //   return scoring(inventor, experts);
  // }).catch((err) => console.log(err));
};
