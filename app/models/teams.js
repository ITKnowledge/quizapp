var mongoose = require('mongoose');
var mongoosePaginator = require('mongoose-paginator-simple');

var Schema   = mongoose.Schema;




var teams = new Schema({
	teamname: String,
	answers: [
				{
				  qnum: Number,
				  answer: String,
				  score: Number,
          Quiz: String
				}
				]

});

teams.plugin(mongoosePaginator);



module.exports = mongoose.model('Teams', teams);
