const mongoose = require("mongoose");

const connectDB = async  (url) => {

   mongoose.set("strictQuery", true)
  
await  mongoose.connect(url, { useNewUrlParser: true,
  useUnifiedTopology: true,})
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err))
}

module.exports = connectDB;