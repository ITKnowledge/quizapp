var mongoose = require('mongoose');
var mongoosePaginator = require('mongoose-paginator-simple');

var Schema   = mongoose.Schema;




var Questions = new Schema({
	  question: String,
    qname: String,
    choice: [],
    answer: String,
    qnum: Number,
    Quiz: String
});

Questions.plugin(mongoosePaginator);



module.exports = mongoose.model('Questions', Questions);
