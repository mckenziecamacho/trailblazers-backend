const express = require("express");
const dotenv = require("dotenv").config()
const cors = require('cors');

const app = express();

app.use(require("./routes/index.js"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.set("port", process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(4000, () => console.log("Running on port 4000"));
// ??another comment

