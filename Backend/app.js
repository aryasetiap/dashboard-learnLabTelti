const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!!!",
    nama: "Arya Setia Pratama",
    npm: "2215061034",
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Aplikasi ini sedang berjalan di http://localhost:${PORT}`);
});
