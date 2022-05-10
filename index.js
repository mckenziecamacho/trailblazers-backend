const express = require("express");
const dotenv = require("dotenv").config()
const cors = require('cors');

const app = express();

app.use(require("./routes/index.js"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.set("port", process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(4000, () => console.log("Running on port 4000"));
// ??another comment

