const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    accessToken: String,
	accessTokenExpiresAt: Date,
	refreshToken: String,
	refreshTokenExpiresAt: Date,
	client: Object,
	user: Object
}).index({ "refreshTokenExpiresAt": 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Token', tokenSchema);