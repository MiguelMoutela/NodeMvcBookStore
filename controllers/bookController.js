/*
 * Controller for the book detail page
 */
module.exports = function(models){
 
  return {
    index: indexAction(models)
  }
};
 
function indexAction(models) {
  return function(req, res) {
    //get all the books
    models.Book.findOne({isbn:req.params.isbn}, function(err, doc){
      renderIndex(res, doc);
    });
  }
}

function renderIndex(res, book) {
  res.render('view.jade', {
    locals: {
      title: book.title,
      book: book
    }
  });
}