module.exports = {
    multipleMongooseToObject: function(mongooseArray) {
        return mongooseArray.map(function(mongooseObject) {
            return mongooseObject.toObject();
        });
    },

    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};