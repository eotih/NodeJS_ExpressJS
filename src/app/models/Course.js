const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

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

module.exports = mongoose.model('Course', Course);