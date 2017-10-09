import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ShopSchema = new Schema({
    "type": String,
    "marque": String,
    "prix": Number
});

module.exports = mongoose.model('Shop', ShopSchema);
