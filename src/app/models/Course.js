const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },//uniqie = true là không có thể được 2 slug
    videoId: { type: String, maxLength: 255 },
    level: { type: String },
}, {
    timestamps: true,
});

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Course', Course);