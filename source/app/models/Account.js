const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//UserSchema.plugin
const AccountSchema = new Schema({
        username: {type: String, required: true},
        email: {type: String, unique: true, require: true},
        password: {type: String, require: true}
    }
);

module.exports = mongoose.model('User', AccountSchema);