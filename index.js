const express = require ("express");
const app = express();

app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(4000, () => console.log("Running on port 4000"));

