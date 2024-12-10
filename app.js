const express = require("express");
const path = require("path");
const connectDB = require("./config/database"); // MongoDB connection
const portfolioRoutes = require("./routes/projectRoutes"); // Importing project routes

const app = express();

// ▼ Connect to MongoDB ▼
connectDB(); // Establish a connection to the MongoDB database

// ▼ Middleware setup ▼
app.set("view engine", "ejs"); // Set EJS as the template engine for rendering views
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory

// ▼ Redirect index route to the homepge ▼
app.get("/", (req, res) => {
  res.redirect("/index");
});

// ▼ Define routes forr the application ▼
app.use("/portfolio", portfolioRoutes); // Use the routes from 'projectRoutes' for '/portfolio'

// ▼ Error handling middleware ▼
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404; // Set error status to 404 for not found routes
  next(error); // Pass the error to the next middleware
});

// ▼ Start the server on the port ▼
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
