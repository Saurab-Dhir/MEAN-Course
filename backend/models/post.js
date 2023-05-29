const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {type: String, required: true },                        // TS uses string and nodeJS uses String both are keywords
  content: {type: String, required: true }
});


// mongoose needs a model to work with after the schema has been established


module.exports =  mongoose.model('Post', postSchema);   /* since our model name is Post our collection name will automatically be posts
                                                           in the database, node-angular degined in the key in app.js*/


/* 'Post': This is the name you're giving to the model.
    This name will be used to refer to the model elsewhere in your application,
    and Mongoose also uses it to create the collection in the database (the collection name is typically
      the pluralized form of the model name).

    postSchema: This is presumably a Mongoose schema object you've defined elsewhere in your code.
    It defines the structure of documents that will be saved in your 'Post' collection.
*/
