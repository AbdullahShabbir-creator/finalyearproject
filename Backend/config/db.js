const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/asifpublicschool", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,  // Set server selection timeout (in ms)
  socketTimeoutMS: 45000,  // Set socket timeout (in ms)
})
.then(() => {
  console.log("MongoDB connection successful!");
})
.catch((err) => {
  consoleAV.error("MongoDB connection error:", err);
});
