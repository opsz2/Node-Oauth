const express = require("express");

const oauthController = require("../controllers/oauth");

const router = express.Router();

router.all("/oauth/token", oauthController.obtainToken);

module.exports = router;
