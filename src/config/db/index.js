const mongoose = require('mongoose');

async function connect(){
    try
    {
        await mongoose.connect('mongodb+srv://lamngoac:lamhp2306@clustermongodb.8bfknmz.mongodb.net/bigdata_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
    catch(err)
    {
        console.log("Connect to MongoDB error: " + err);
    }
};

module.exports = {connect};