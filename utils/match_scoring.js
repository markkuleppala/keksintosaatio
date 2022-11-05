const axios = require('axios');
const _ = require('lodash');

const inventor = {
    "firstName": "Alex",
    "lastName": "Smith",
    "maturity": "Commercializing",
    "industry": "Education",
    "expertise": "Patenting",
}

function get_experts() {
    try {
        return axios.get("https://mockend.com/markkuleppala/keksintosaatio-mockend/experts").then(response => response.data)
    } catch(err) {
        console.log(err.message);
    }
}

// Weights maturity (0/15%), industry (0/30%), expertise (0/40%), experience (0-15%)
const W_MATURITY = 0.15
const W_INDUSTRY = 0.30
const W_EXPERTISE = 0.40
const W_EXPERIENCE = 0.15
const EXPERIENCE_MAX = 25
const EXPERTS_TO_RETURN = 5

function scoring_helper(expert) {
    return expert[1]
}

const zip = (...arr) => {
    const zipped = [];
    arr.forEach((element, ind) => {
       element.forEach((el, index) => {
          if(!zipped[index]){
             zipped[index] = [];
          };
          if(!zipped[index][ind]){
             zipped[index][ind] = [];
          }
          zipped[index][ind] = el || '';
       })
    });
    return zipped;
 };

function scoring(inventor, experts) {
    var scores = [];
    for (const expert of experts) {
        var score = 0.0
        if (expert["maturity"].includes(inventor["maturity"]))
            score += W_MATURITY
        if (expert["industry"].includes(inventor["industry"]))
            score += W_INDUSTRY
        if (expert["expertise"].includes(inventor["expertise"]))
            score += W_EXPERTISE
        score += expert["experience"] / EXPERIENCE_MAX * W_EXPERIENCE
        scores.push(score)
    }
    var expert_scores = _.sortBy(_.zip(experts,scores), [function(o) { return o[1]; }]);

    return expert_scores.slice(-5)

}

function main(inventor) {
    get_experts().then(experts => {
        console.log(scoring(inventor, experts));
    }).catch(err => console.log(err))
}

main(inventor)