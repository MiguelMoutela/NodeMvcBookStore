/*
 * Controller for the home page
 */
module.exports = function(models){
 
  return {
    index: indexAction(models)
  }
};
 
function indexAction(models) {
  return function(req, res) {
    //get all the books
    models.Book.find({}, function(err, docs){
      renderIndex(res, docs);
    });
  }
}

function renderIndex(res, docs) {
  res.render('index.jade', {
    locals: {
      title: 'Books',
      books: docs
    }
  });
}