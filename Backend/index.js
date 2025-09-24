const connectToMongo = require("./db");
connectToMongo();

//taking code from express 
// Optional: Start Express server
const express = require("express");
const app = express();
const port =5000

//use middleware because agr reueest .body ko karna chahte ho toh 
app.use(express.json()); // ab req.body kaam karega



//available routes =aapka server alag-alag URLs aur HTTP requests (GET, POST, PUT, DELETE) pe kya response dega.

app.use('/api/auth',require('./routes/auth')) 
app.use('/api/notes',require('./routes/notes')) 

// it go to auth .js file 
// app.use('/api/notes',require('./routes/notes'))


app.get("/", (req, res) => {
  res.send("MongoDB connection working!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

