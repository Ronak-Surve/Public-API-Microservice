const express = require("express");
const {getProfile, getCandidates} = require("../controllers/apiController")
const apiRoutes = express.Router();

apiRoutes.route("/profile/:apiKey")
.get(getProfile)
.post(getProfile);

apiRoutes.route("/candidate/:apiKey")
.get(getCandidates);

module.exports = apiRoutes;

