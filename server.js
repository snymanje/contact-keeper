const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contacts");
const path = require("path");
const app = express();

connectDB();

app.use(express.json({ extended: true }));

/* app.get("/", (req, res) => res.json({ msg: "Welcome!" })); */

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
