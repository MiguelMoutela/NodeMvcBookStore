
module.exports = function(app, controllers){

  /**
   *  Index
   */
  app.get('/', controllers['home'].index);

  app.get('/book/:isbn', controllers['book'].index);
};