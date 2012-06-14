module.exports = function(mongoose) {
  var collection = 'books';
  //var Schema = mongoose.Schema;
  var ObjectId = mongoose.Schema.ObjectId;

  var schema = new mongoose.Schema({
    isbn: {type: String, unique:true}, 
    title: {type:String, required:true},
    author: {type:String, required:true}
  }, { strict: true });

  return mongoose.model('books', schema);
};