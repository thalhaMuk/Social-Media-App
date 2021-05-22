// MongoDb is schema-less but with mongoose we can specify a schema to have more security when working with the code
const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
