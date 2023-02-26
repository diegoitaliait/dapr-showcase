const express = require("express");
const app = express();

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
app.use(express.json());

// Routes
const statusRouter = require("./routes/status");
const colorRouter = require("./routes/color");

app.get("/", (req, res) => {
  console.log("home_root");
  res.json({ message: "Hi from HOME" });

});

app.use("/status", statusRouter);
app.use("/color", colorRouter);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
