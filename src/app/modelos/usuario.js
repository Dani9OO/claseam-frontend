const {Schema, model}= require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
    forename : String,
    surname : String,
    email : String,
    password: String,
    type : String,
    group: String
});

userSchema.methods.encriptaPass = async (password) => {
    const salt = await bcryptgenSalt()10;
    return bcrypt.hash(password,salt);
};

userSchema.methods.compararPass = async (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = model ('usuario', userSchema);