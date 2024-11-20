const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dob: { type: Date, required: false },
    firebaseUID: { type: String, required: true },
    createdOn: { type: Date, default: Date.now() }
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;


// const mongoose = require("mongoose");
// const bcrypt = require('bcrypt')

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     dob: { type: Date, required: false },
//     password: { type: String, required: true },
//     createdOn: { type: Date, default: Date.now() }
// })

// userSchema.pre('save', function (next) {
//     if (!this.isModified('password')) {
//         return next()
//     }
//     bcrypt.hash(this.password, 10, (err, hashedPassword) => {
//         if (err) { return next(err) }
//         this.password = hashedPassword
//         next()
//     })
// })

// userSchema.methods.compare = async function (candidatePassword) {
//     bcrypt.compare(candidatePassword, this.password, function (err, match) {
//         if (error) { return error }
//         return match
//     })
// }

// const userModel = mongoose.model('user', userSchema)
// module.exports = userModel