const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iNotebook";
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};
module.exports = connectToMongo;
