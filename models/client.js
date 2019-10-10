const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    id: String,
	clientId: String,
	clientSecret: String,
	grants: [String],
	redirectUris: [String]
});

module.exports = mongoose.model('Client', clientSchema);