const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete= require('mongoose-delete');



const CourseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    video: {type: String, required: true},
    content: {type: String, required: true},
    slug: {type: String, slug:'name', unique: true},
},
    {timestamps: true,}
);

//Sort query helpers
CourseSchema.query.sortable = function (req){
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc'
        })
    }
    return this;
}

//plugins
mongoose.plugin(slug)
// CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete,{
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('Course', CourseSchema);
