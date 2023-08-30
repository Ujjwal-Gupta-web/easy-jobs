const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Application = new Schema({
    application_applicant_id:{
        type: Schema.Types.ObjectId,
        ref: 'Applicants'
    },
    application_jobpost_id:{
        type: Schema.Types.ObjectId,
        ref: 'JobPosts'
    }
});


module.exports = mongoose.model('Applications', Application); 