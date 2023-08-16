const mongoose = require('mongoose');
//Anurag7979@mi
const url = 'mongodb+srv://anu23:anurag123@issue.59rrgn3.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect('url') mongodb+srv://anu23:<password>@issue.c11k4qx.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
