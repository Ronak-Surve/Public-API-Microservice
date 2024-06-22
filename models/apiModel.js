const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  user_id: {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
    ref : "User",
  },
  key: { 
    type: String, 
    required : true,
    unique: true, 
    },
});


const apiKeyModel = mongoose.model('ApiKey', apiKeySchema);

module.exports = apiKeyModel;
