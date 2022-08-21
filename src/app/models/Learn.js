const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Learn = new Schema({
    studentCode: { type: String, required: true },
    fullName: { type: String, required: true },
    subCode: { type: String, required: true },
    name: { type: String, required: true },
    studied: { type: Boolean, default: false },
    mark: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

// Add plugin
mongoose.plugin(slug);
Learn.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' });

module.exports = mongoose.model('Learn', Learn);