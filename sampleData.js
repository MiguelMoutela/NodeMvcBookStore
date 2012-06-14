module.exports = function(models) {
	// Clear all the existing books.
	models.Book.find({}).remove();

	new models.Book({isbn:'2435243545', title:'Catcher in the Rye', author:'JD Salinger'}).save();
	new models.Book({isbn:'4574675687', title:'Old Man and the Sea', author:'Earnest Hemingway'}).save();
	new models.Book({isbn:'8097890789', title:'The Great Gatsby', author:'F. Scott Fitzgerald'}).save();
	new models.Book({isbn:'4779869867', title:'Moby Dick', author:'Herman Melville'}).save();
	new models.Book({isbn:'6978034656', title:'Around the World in 80 Days', author:'Jules Verne'}).save();
	new models.Book({isbn:'0790895674', title:'Huck Finn', author:'Mark Twain'}).save();
}