const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Student = new Schema({
    fullName: { type: String, required: true },
    studentCode: { type: String, required: true, unique: true },
    slug: { type: String, slug: 'studentCode', unique: true },
    birthday: { type: Date, required: true },
    gender: { type: String, required: true },
    gene: { type: String, required: true },
    city: { type: String },
    email: { type: String },
    certificated: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Add plugin
mongoose.plugin(slug);
Student.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' });

module.exports = mongoose.model('Student', Student);