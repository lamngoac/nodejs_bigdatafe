const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    fullName: { type: String, required: true },
    studentCode: { type: String, required: true },
    studentImage: { type: String, required: true },
    birthday: { type: Date, required: true },
    gender: { type: String, required: true },
    gene: { type: String, required: true },
    city: { type: String },
    email: { type: String },
    certificated: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', Student);